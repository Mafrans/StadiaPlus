import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from '../AbstractComponent';
import Util from '../../Util';
// @ts-ignore
import MonitorRunnable from '../../MonitorRunnable.txtjs';
import StadiaPage from '../../StadiaPage';
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
import { formatBits, formatBytes, getStream, reorder } from './GameMonitorHelpers';

export interface GameMonitorItem {
    name: string
    value: string
    visible: boolean
    id: string
}

interface INetworkMonitorComponentState extends DefaultState {
    items: GameMonitorItem[]
    sidebarOpen: boolean
    loading: boolean
    enabled: boolean
    position: { x: number, y: number },
    transform: { x: number, y: number }
}

export default class GameMonitorComponent extends AbstractComponent<DefaultProps, INetworkMonitorComponentState> {
    itemData: { [id: string]: { index: number, visible: boolean } } | null = null;
    messageListener = this.onMessageCapture.bind(this);

    grabPosition?: { x: number, y: number };
    grabElement?: HTMLElement;
    moveListener: (event: MouseEvent) => void = this.onMove.bind(this);
    lastBytesReceived: number = 0;

    constructor() {
        super({
            name: "Game Monitor Component",
            useReact: true,
            pageFilter: [ StadiaPage.PLAYER ]
        });

        this.state = {
            renderer: null,
            items: [],
            sidebarOpen: false,
            loading: true,
            enabled: false,
            position: { x: 0, y: 0 },
            transform: { x: 0, y: 0 }
        }
    }

    async onStart() {
        Util.desandbox(MonitorRunnable);

        this.itemData = await Config.MONITOR_ITEMS.get() || {};
        window.addEventListener('message', this.messageListener);
    }

    async onStop() {
        window.removeEventListener('message', this.messageListener);
    }

    onMessageCapture(event: MessageEvent) {
        if (event.data.source === 'StadiaPlusNetworkMonitor' && !this.state.sidebarOpen) {
            if (event.data.stats === undefined || event.data.stats === null || event.data.stats.length < 2) {
                this.setState(() => ({
                    loading: true
                }));
                return;
            }

            const statArray: [string, any] = event.data.stats[1];

            const ICECandidatePair = RTCStatistic.from<RTCStatistics.RTCIceCandidatePair>(
                statArray,
                id => id.startsWith('RTCIceCandidatePair')
            );

            if(this.state.loading && ICECandidatePair.bytesReceived! !== 0) {
                this.setState(() => ({
                    loading: false
                }));
            }

            if (this.state.items.length !== 0
                && !this.state.enabled
                && !this.state.sidebarOpen) return;


            const { videoStream, videoCodec, audioCodec } = getStream(statArray);
            const { bytesReceived, availableOutgoingBitrate, currentRoundTripTime } = ICECandidatePair;
            const bytesPerSecond = bytesReceived! - this.lastBytesReceived;

            // TODO: Is it possible to move into a fined format. perhaps a class?
            let items = [
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

            // TODO: clean this up into its own function
            if (this.itemData !== null && this.itemData !== undefined) {
                items = items.sort((a, b) => this.itemData![a.id]?.index - this.itemData![b.id]?.index);
                for (let i = 0; i < items.length; i++) {
                    let item = items[i] || { visible: true };
                    item.visible = this.itemData![item.id]?.visible;
                }

                if (Object.keys(this.itemData).length != items.length) {
                    this.itemData = {};
                    items.forEach((item, index) => this.itemData![item.id] = { index, visible: item.visible });
                }
            }
            else {
                this.itemData = {};
                items.forEach((item, index) => this.itemData![item.id] = { index, visible: item.visible });
            }

            this.setState(() => ({
                items
            }))

            this.lastBytesReceived = bytesReceived!
        }
    }

    async onUpdate() {
        this.updateRenderer();

        const sidebar = document.querySelector(StadiaSelectors.PLAYER_SIDEBAR) as HTMLElement | null;
        const sidebarOpen = sidebar !== null && sidebar.style.opacity === '1';
        if (this.state.sidebarOpen !== sidebarOpen) {
            this.setState(() => ({
                sidebarOpen
            }));
        }
    }

    moveItemTo(id: string, source: number, destination: number) {
        if (this.itemData === null || this.itemData === undefined) return;

        // Reorder other items to match
        for (const id of Object.keys(this.itemData)) {
            let index = this.itemData[id].index;

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
            this.itemData[id].index = index;
        }
        this.itemData[id].index = destination;
        Config.MONITOR_ITEMS.set(this.itemData);
    }

    onDragEnd (result: DropResult) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        this.moveItemTo(result.draggableId, result.source.index, result.destination.index);

        const items = reorder<GameMonitorItem>(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({
            items,
        });
    }

    toggleEnabled(): void {
        this.setState(state => ({ enabled: !state.enabled }))
    }

    onGrab(event: React.MouseEvent) {
        (event.target as HTMLElement).style.cursor = 'grabbing';

        this.grabElement = (event.target as HTMLElement).parentElement!;
        const offsetX = this.state.position.x;
        const offsetY = this.state.position.y;

        this.grabPosition = {
            x: event.pageX - offsetX,
            y: event.pageY - offsetY
        };

        if (this.state.transform.x !== 0) {
            this.grabPosition.x += this.grabElement.offsetWidth;
        }
        if (this.state.transform.y !== 0) {
            this.grabPosition.y += this.grabElement.offsetHeight;
        }

        window.addEventListener('mousemove', this.moveListener);
        const onRelease = () => {
            (event.target as HTMLElement).style.cursor = '';

            window.removeEventListener('mousemove', this.moveListener);
            window.removeEventListener('mouseup', onRelease);
        }
        window.addEventListener('mouseup', onRelease);

        event.preventDefault();
    }

    onMove(event: MouseEvent) {
        let x = event.x - this.grabPosition!.x;
        let y = event.y - this.grabPosition!.y;
        let transform = { x: 0, y: 0 };

        const border = {
            left: x,
            top: y,
            right: x + this.grabElement!.offsetWidth,
            bottom: y + this.grabElement!.offsetHeight
        };

        const snapMargin = 1;

        if (border.left < snapMargin) {
            x = 0;
        }
        else if (border.right > window.innerWidth - snapMargin) {
            x = window.innerWidth;
            transform.x = -100;
        }

        if (border.top < snapMargin) {
            y = 0;
        }
        else if (border.bottom > window.innerHeight - snapMargin) {
            y = window.innerHeight;
            transform.y = -100;
        }

        this.setState(() => ({ position: { x, y }, transform }));
    }

    toggleItemVisibility(item: GameMonitorItem, value: boolean) {
        const items = this.state.items;
        items[items.indexOf(item)].visible = value;

        this.setState(() => ({ items }));

        if (this.itemData !== null) {
            this.itemData[item.id].visible = value;
            void Config.MONITOR_ITEMS.set(this.itemData);
        }
    }

    render(): null | React.ReactPortal {
        if (!this.state.active) return null;
        if (!this.state.enabled && !this.state.loading && !this.state.sidebarOpen) return null;

        return ReactDOM.createPortal(
            <Wrapper 
                style={{ 
                    backgroundColor: Theme.hexToRGBA(Theme.Colors.gray[900], this.state.sidebarOpen ? 1 : 0.25),
                    left: this.state.position.x,
                    top: this.state.position.y,
                    transform: `translate(${this.state.transform.x}%, ${this.state.transform.y}%)`,
                }}
            >
                <Loader 
                    isLoading={this.state.loading}
                />
                
                <MonitorWrapper
                    style={{
                        display: this.state.loading ? 'none' : '',
                        width: !this.state.sidebarOpen ? 'auto' : ''
                    }}
                >
                    <Header
                        visible={this.state.sidebarOpen}
                        collapsed={!this.state.enabled}
                        onToggle={(val) => {
                            console.log('this happens', val);
                            this.setState(() => ({ enabled: val }))
                        }}
                        onGrab={this.onGrab.bind(this)}
                    />
                    { this.state.enabled &&
                        <Content
                            editable={ this.state.sidebarOpen }
                            items={ this.state.items }
                            onVisibilityToggle={ this.toggleItemVisibility.bind(this) }
                            onDragEnd={ this.onDragEnd.bind(this) }
                        />
                    }
                </MonitorWrapper>
                
            </Wrapper>,
            document.getElementById('stadiaplus-root')!
        );
    }
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
