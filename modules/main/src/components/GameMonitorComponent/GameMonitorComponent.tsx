import React, { useState } from 'react';
import Util from '../../Util';
import MonitorRunnable from '../../MonitorRunnable.txtjs';
import ReactDOM from 'react-dom';
import { RTCStatistics } from '../../RTCStatistics';
import RTCStatistic = RTCStatistics.RTCStatistic;
import tw from 'twin.macro';
import { Theme } from '../../../../shared/Theme';
import { StadiaSelectors } from '../../StadiaSelectors';
import { DropResult } from 'react-beautiful-dnd';
import { Config } from '../../../../shared/Config';
import Loader from './components/Loader.component';
import styled from 'styled-components';
import Header from './components/Header.component';
import Content from './components/Content.component';
import { formatBytes, getStream, reorder } from './GameMonitorHelpers';
import { onPageChanged } from '../../events/PageChangeEvent';

export interface GameMonitorItem {
    name: string
    value: string
    visible: boolean
    id: string
}

const GameMonitorComponent = () => {
    const [items, setItems] = useState<GameMonitorItem[]>([]);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [enabled, setEnabled] = useState<boolean>(false);
    const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
    const [transform, setTransform] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

    let itemData: { [id: string]: { index: number, visible: boolean } } | null = null;
    let grabPosition: { x: number, y: number };
    let grabElement: HTMLElement;
    let lastBytesReceived: number = 0;

    const parseItemData = (newItems: GameMonitorItem[]) => {
        if (itemData !== null && itemData !== undefined) {
            newItems = newItems.sort((a, b) => itemData![a.id]?.index - itemData![b.id]?.index);
            for (let i = 0; i < newItems.length; i++) {
                let item = newItems[i] || { visible: true };
                item.visible = itemData![item.id]?.visible;
            }

            if (Object.keys(itemData).length != newItems.length) {
                itemData = {};
                newItems.forEach((item, index) => itemData![item.id] = { index, visible: item.visible });
            }
        }
        else {
            itemData = {};
            newItems.forEach((item, index) => itemData![item.id] = { index, visible: item.visible });
        }

        return newItems;
    }

    const onMessageCapture = (event: MessageEvent) => {
        if (event.data.source === 'StadiaPlusNetworkMonitor' && !sidebarOpen) {
            if (event.data.stats === undefined || event.data.stats === null || event.data.stats.length < 2) {
                setLoading(true);
                return;
            }
            const statArray: [string, any] = event.data.stats[1];
            const ICECandidatePair = RTCStatistic.from<RTCStatistics.RTCIceCandidatePair>(
                statArray,
                id => id.startsWith('RTCIceCandidatePair')
            );

            if(loading && ICECandidatePair.bytesReceived! !== 0) {
                setLoading(false);
            }

            if (items.length !== 0 && !enabled && !sidebarOpen) {
                return;
            }

            const { videoStream, videoCodec, audioCodec } = getStream(statArray);
            const { bytesReceived, availableOutgoingBitrate, currentRoundTripTime } = ICECandidatePair;
            const bytesPerSecond = bytesReceived! - lastBytesReceived;

            // TODO: Is it possible to move into a fined format. perhaps a class?
            let newItems = [
                {
                    name: 'Latency',
                    value: `${Math.round(currentRoundTripTime! * 1000)} ms`,
                    visible: true,
                    id: 'latency',
                },
                {
                    name: 'Resolution',
                    value: `${videoStream.frameWidth}x${videoStream.frameHeight}`,
                    visible: true,
                    id: 'resolution',
                },
                {
                    name: 'Bytes Received',
                    value: `${formatBytes(ICECandidatePair.bytesReceived!)}`,
                    visible: true,
                    id: 'bytes-received',
                },
                {
                    name: 'Video Codec',
                    value: `${videoCodec.mimeType!.split('/')[1]} (${videoStream.decoderImplementation === 'ExternalDecoder' ? 'hardware' : 'software'})`,
                    visible: true,
                    id: 'video-codec',
                },
                {
                    name: 'Audio Codec',
                    value: `${audioCodec.mimeType!.split('/')[1]}`,
                    visible: true,
                    id: 'audio-codec',
                },
                {
                    name: 'Bitrate',
                    value: `${formatBytes(availableOutgoingBitrate!)}/s`,
                    visible: true,
                    id: 'bitrate',
                },
                {
                    name: 'Bytes/s',
                    value: `${formatBytes(bytesPerSecond)}/s`,
                    visible: true,
                    id: 'bytes-per-second',
                },
            ]

            lastBytesReceived = bytesReceived!;
            setItems(parseItemData(newItems));
        }
    }

    const moveItemTo = (id: string, source: number, destination: number) => {
        if (!itemData) {
            return;
        }

        // Reorder other items to match
        for (const id in itemData) {
            let index = itemData[id].index;

            if (source > destination) {
                if (index > source && index <= destination) {
                    index--;
                }
            }
            else {
                if (index < source && index >= destination) {
                    index++;
                }
            }
            itemData[id].index = index;
        }
        itemData[id].index = destination;
        void Config.MONITOR_ITEMS.set(itemData);
    }

    const onDragEnd = (result: DropResult) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        moveItemTo(result.draggableId, result.source.index, result.destination.index);

        setItems(reorder<GameMonitorItem>(
            items,
            result.source.index,
            result.destination.index
        ));
    }

    const onGrab = (event: React.MouseEvent) => {
        (event.target as HTMLElement).style.cursor = 'grabbing';

        grabElement = (event.target as HTMLElement).parentElement!;
        const offsetX = position.x;
        const offsetY = position.y;

        grabPosition = {
            x: event.pageX - offsetX,
            y: event.pageY - offsetY
        };

        if (transform.x !== 0) {
            grabPosition.x += grabElement.offsetWidth;
        }
        if (transform.y !== 0) {
            grabPosition.y += grabElement.offsetHeight;
        }

        const onRelease = () => {
            (event.target as HTMLElement).style.cursor = '';

            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onRelease);
        }

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onRelease);

        event.preventDefault();
    }

    const onMove = (event: MouseEvent) => {
        let x = event.x - grabPosition.x;
        let y = event.y - grabPosition.y;
        let transform = { x: 0, y: 0 };

        if (x <= 0) {
            x = 0;
        }
        else if (x + grabElement.offsetWidth >= window.innerWidth) {
            x = window.innerWidth;
            transform.x = -100;
        }

        if (y <= 0) {
            y = 0;
        }
        else if (y + grabElement.offsetHeight >= window.innerHeight) {
            y = window.innerHeight;
            transform.y = -100;
        }

        setPosition({ x, y });
        setTransform(transform);
    }

    const toggleItemVisibility = (item: GameMonitorItem, value: boolean) => {
        const newItems = items;
        newItems[newItems.indexOf(item)].visible = value;
        setItems(newItems);

        if (itemData !== null) {
            itemData[item.id].visible = value;
            void Config.MONITOR_ITEMS.set(itemData);
        }
    }

    onPageChanged(async event => {
        if (event.page === 'player') {
            Util.desandbox(MonitorRunnable);

            itemData = await Config.MONITOR_ITEMS.get() || {};
            window.addEventListener('message', onMessageCapture);
        }
    });

    setInterval(() => {
        const sidebar = document.querySelector(StadiaSelectors.PLAYER_SIDEBAR) as HTMLElement | null;
        const newSidebarOpen = sidebar !== null && sidebar.style.opacity === '1';

        if (newSidebarOpen !== sidebarOpen) {
            setSidebarOpen(newSidebarOpen);
        }
    }, 500);

    if (!enabled && !loading && !sidebarOpen) return null;
    ReactDOM.createPortal(
        <Wrapper
            style={{
                backgroundColor: Theme.hexToRGBA(Theme.Colors.gray[900], sidebarOpen ? 1 : 0.25),
                left: position.x,
                top: position.y,
                transform: `translate(${transform.x}%, ${transform.y}%)`,
            }}
        >
            <Loader isLoading={loading} />

            <MonitorWrapper
                style={{
                    display: loading ? 'none' : '',
                    width: !sidebarOpen ? 'auto' : ''
                }}
            >
                <Header
                    visible={ sidebarOpen }
                    collapsed={ !enabled }
                    onToggle={ (val) => setEnabled(val) }
                    onGrab={ onGrab }
                />
                { enabled && <Content
                    editable={ sidebarOpen }
                    items={ items }
                    onVisibilityToggle={ toggleItemVisibility }
                    onDragEnd={ onDragEnd }
                /> }
            </MonitorWrapper>
        </Wrapper>,
        document.getElementById('stadiaplus-root')!
    );
}

const Wrapper = styled.div`
    ${tw`
        fixed
        rounded-lg
        box-border
        text-white
        p-2
    `}
    z-index: 200;
    font-family: Overpass, sans-serif;
`

const MonitorWrapper = styled.div`
    ${tw`
        transition
    `}
    width: 22rem;
`

export default GameMonitorComponent;
