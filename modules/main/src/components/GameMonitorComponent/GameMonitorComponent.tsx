import React from 'react';
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
import { StadiaPage } from '../../StadiaPage';
import { CgAdd, CgTrending } from 'react-icons/cg';

export interface GameMonitorItem {
    name: string
    value: string
    visible: boolean
    id: string
}

interface GameMonitorState {
    items: GameMonitorItem[]
    currentPage: StadiaPage
    sidebarOpen: boolean
    enabled: boolean
    loading: boolean
    position: { x: number, y: number }
    offset: { x: number, y: number }
    transform: { x: number, y: number }
}

/*
 *  IT HURTS, BUT THIS HAS TO BE A REACT CLASS TO WORK PROPERLY.
 */

export default class GameMonitorComponent extends React.Component<any, GameMonitorState> {
    itemData: { [id: string]: { index: number, visible: boolean } } | null = null;
    grabPosition: { x: number, y: number } = {x: 0, y: 0};
    grabElement?: HTMLElement;
    lastBytesReceived: number = 0;
    isCapturing: boolean = false;
    messageCaptureListener: (e: MessageEvent) => void;

    constructor(props: any) {
        super(props);

        this.state = {
            currentPage: 'home',
            enabled: false,
            items: [],
            loading: false,
            position: { x: 8, y: 8 },
            offset: { x: 0, y: 0 },
            sidebarOpen: false,
            transform: { x: 0, y: 0 }
        };

        onPageChanged(async event => {
            console.log({ event })
            if (event.page === 'player') {
                console.log(await Config.MONITOR_ITEMS.get());
                this.itemData = await Config.MONITOR_ITEMS.get() || {};

                this.setState({ loading: true });
                Util.desandbox(MonitorRunnable);
            }
            else {
                Util.desandbox('StadiaPlusNetworkMonitor.stop()');
            }
            this.setState({ currentPage: event.page });
        });

        // TODO: Make this an observer
        setInterval(() => {
            const sidebar = document.querySelector(StadiaSelectors.PLAYER_SIDEBAR) as HTMLElement | null;
            const newSidebarOpen = sidebar !== null && sidebar.style.opacity === '1';

            if (newSidebarOpen !== this.state.sidebarOpen) {
                this.setState({ sidebarOpen: newSidebarOpen })
            }
        }, 500);

        this.messageCaptureListener = this.onMessageCapture.bind(this);
    }


    parseItemData(newItems: GameMonitorItem[]): GameMonitorItem[] {
        if (this.itemData !== null && this.itemData !== undefined) {
            newItems = newItems.sort((a, b) => this.itemData![a.id]?.index - this.itemData![b.id]?.index);
            for (let i = 0; i < newItems.length; i++) {
                let item = newItems[i] || { visible: true };
                item.visible = this.itemData[item.id] ? this.itemData[item.id].visible : true;
            }

            if (Object.keys(this.itemData).length != newItems.length) {
                this.itemData = {};
                newItems.forEach((item, index) => this.itemData![item.id] = { index, visible: item.visible });
            }
        }
        else {
            this.itemData = {};
            newItems.forEach((item, index) => this.itemData![item.id] = { index, visible: item.visible });
        }

        return newItems;
    }

    onMessageCapture(event: MessageEvent) {
        const {sidebarOpen, loading} = this.state;
        if (event.data.source === 'StadiaPlusNetworkMonitor' && !sidebarOpen) {
            if (!loading) {
                if (event.data.stats === undefined || event.data.stats === null || event.data.stats.length < 2) {
                    this.setState({ loading: true });
                    return;
                }
            }
            const statArray: [string, any] = event.data.stats[1];
            const ICECandidatePair = RTCStatistic.from<RTCStatistics.RTCIceCandidatePair>(
                statArray,
                id => id.startsWith('RTCIceCandidatePair')
            );

            if (!ICECandidatePair) {
                return;
            }

            if (loading && ICECandidatePair.bytesReceived! > 0) {
                this.setState({ loading: false });
            }

            const { videoStream, videoCodec, audioCodec } = getStream(statArray);
            const { bytesReceived, availableOutgoingBitrate, currentRoundTripTime } = ICECandidatePair;
            const bytesPerSecond = bytesReceived! - this.lastBytesReceived;

            // TODO: Is it possible to move into a fined format. perhaps a class?
            let newItems = [
                {
                    name: 'Latency',
                    value: `${Math.round(currentRoundTripTime! * 1000)} ms`,
                    visible: true,
                    id: 'latency',
                },
                videoStream && {
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
                videoCodec && videoStream && {
                    name: 'Video Codec',
                    value: `${videoCodec.mimeType!.split('/')[1]} (${videoStream.decoderImplementation === 'ExternalDecoder' ? 'hardware' : 'software'})`,
                    visible: true,
                    id: 'video-codec',
                },
                audioCodec && {
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
            ] as GameMonitorItem[];

            console.log('update items')
            this.lastBytesReceived = bytesReceived!;
            this.setState({ items: this.parseItemData(newItems) })
        }
    }

    moveItemTo(id: string, source: number, destination: number) {
        if (!this.itemData) {
            return;
        }

        // Reorder other items to match
        for (const i in this.itemData) {
            let index = this.itemData[i].index;

            if (source < destination) {
                if (index > source && index <= destination) {
                    index--;
                }
            }
            else {
                if (index < source && index >= destination) {
                    index++;
                }
            }
            console.log(i, index)
            this.itemData[i].index = index;
        }
        this.itemData[id].index = destination;
        console.log(this.itemData);
        void Config.MONITOR_ITEMS.set(this.itemData);
    }

    onDragEnd(result: DropResult) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        this.moveItemTo(result.draggableId, result.source.index, result.destination.index);

        this.setState({
            items: reorder<GameMonitorItem>(
                this.state.items,
                result.source.index,
                result.destination.index
            )
        })
    }

    onGrab(event: React.MouseEvent) {
        const {position, offset, transform} = this.state;

        (event.target as HTMLElement).style.cursor = 'grabbing';

        this.grabElement = Util.parent(event.target as HTMLElement, 2) as HTMLElement;
        const offsetX = position.x + offset.x;
        const offsetY = position.y + offset.y;

        this.grabPosition = {
            x: event.pageX - offsetX,
            y: event.pageY - offsetY
        };

        if (transform.x !== 0) {
            this.grabPosition.x += this.grabElement.offsetWidth;
        }
        if (transform.y !== 0) {
            this.grabPosition.y += this.grabElement.offsetHeight;
        }

        let mousePos = { x: event.clientX, y: event.clientY };
        let onMouseMove = (event: MouseEvent) => {
            mousePos = { x: event.clientX, y: event.clientY };
        }

        const moveLoop = () => {
            this.onMoveTick(mousePos);
            if(this.grabElement) {
                requestAnimationFrame(moveLoop)
            }
        }
        moveLoop();

        const onRelease = () => {
            (event.target as HTMLElement).style.cursor = '';
            this.grabElement = undefined;
            this.grabPosition = {x: 0, y: 0}
            window.removeEventListener('mousemove', onMouseMove);
        }

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onRelease);

        event.preventDefault();
    }

    timer?: number;
    onMoveTick(position: {x: number, y: number}) {
        if (!this.grabElement) return;
        const deltaTime = (Date.now() - (this.timer || Date.now())) / 1000;
        this.timer = Date.now();

        const speed = 15;
        let x = Util.lerp(this.state.position.x, position.x - this.grabPosition.x, deltaTime * speed);
        let y = Util.lerp(this.state.position.y, position.y - this.grabPosition.y, deltaTime * speed);

        let transform = { x: 0, y: 0 };
        let offsetX = 0;
        let offsetY = 0;

        if (x <= 0) {
            x = 0;
        }
        else if (x + this.grabElement.offsetWidth >= window.innerWidth) {
            x = window.innerWidth - this.grabElement.offsetWidth;
            offsetX = this.grabElement.offsetWidth;
            transform.x = -100;
        }

        if (y <= 0) {
            y = 0;
        }
        else if (y + this.grabElement.offsetHeight >= window.innerHeight) {
            y = window.innerHeight - this.grabElement.offsetHeight;
            offsetY = this.grabElement.offsetHeight;
            transform.y = -100;
        }

        this.setState({
            position: { x, y },
            offset: { x: offsetX, y: offsetY },
            transform
        });
    }

    toggleItemVisibility(item: GameMonitorItem, value: boolean) {
        const { items } = this.state;
        items[items.indexOf(item)].visible = value;

        this.setState({ items })

        if (this.itemData !== null) {
            this.itemData[item.id].visible = value;
            void Config.MONITOR_ITEMS.set(this.itemData);
        }
    }

    render() {
        const {
            items, sidebarOpen,
            currentPage, enabled,
            loading, position,
            offset, transform
        } = this.state;

        console.log(enabled);

        if (loading || (enabled && !sidebarOpen)) {
            if (!this.isCapturing) {
                addEventListener('message', this.messageCaptureListener);
                this.isCapturing = true;
            }
        }
        else {
            if (this.isCapturing) {
                removeEventListener('message', this.messageCaptureListener);
                this.isCapturing = false;
            }
        }

        console.log({ currentPage });

        return (currentPage === 'player' && (enabled || loading || sidebarOpen)) && ReactDOM.createPortal(<>
            { sidebarOpen && <OpenIcon
                style={{
                    opacity: enabled ? 0 : 1,
                    pointerEvents: enabled ? 'none' : 'all',
                }}
                onClick={() => this.setState({ enabled: true })}
            >
                <CgTrending size={24} />
            </OpenIcon> }

            <Wrapper
                style={{
                    left: position.x + offset.x,
                    top: position.y + offset.y,
                    transform: `translate(${transform.x}%, ${transform.y}%)`,
                }}
            >
                <Loader isLoading={loading} />

                <MonitorWrapper
                    style={{
                        backgroundColor: Theme.hexToRGBA(Theme.Colors.gray[900], sidebarOpen ? 1 : 0.25),
                        display: loading ? 'none' : '',
                        width: !sidebarOpen ? 'auto' : '',
                        opacity: enabled ? 1 : 0,
                        transform: `translateY(${enabled ? 0 : 16}px)`,
                        pointerEvents: enabled ? 'all' : 'none'
                    }}
                >
                    <Header
                        visible={ sidebarOpen }
                        onClose={ () => this.setState({ enabled: false }) }
                        onGrab={ this.onGrab.bind(this) }
                    />
                    <Content
                        editable={ sidebarOpen }
                        items={ items }
                        dragOffset={{ x: -position.x, y: -position.y }}
                        onVisibilityToggle={ this.toggleItemVisibility.bind(this) }
                        onDragEnd={ this.onDragEnd.bind(this) }
                    />
                </MonitorWrapper>
            </Wrapper></>,
            document.getElementById('stadiaplus-root')!
        );
    }
}

const OpenIcon = styled.div`
    ${tw`
        left-2
        top-2
        absolute
        flex
        p-3
        rounded-full
        cursor-pointer
        transition
    `}
    z-index: 1000;
    background-color: ${Theme.Colors.gray[900]};
`

const Wrapper = styled.div`
    ${tw`
        absolute
        box-border
        text-white
    `}
    z-index: 200;
    font-family: Overpass, sans-serif;
`

const MonitorWrapper = styled.div`
    ${tw`
        p-2
        rounded-lg
    `}
    width: 22rem;
    transition: transform 0.2s ease-out, opacity 0.2s ease-out;
`
