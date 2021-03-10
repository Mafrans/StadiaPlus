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
import { formatBytes, getStream, reorder } from './GameMonitorHelpers';

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
    position: { x: number, y: number }
}

export default class GameMonitorComponent extends AbstractComponent<DefaultProps, INetworkMonitorComponentState> {
    itemData: { [id: string]: { index: number, visible: boolean } } | null = null;
    messageListener = this.onMessageCapture.bind(this);

    grabPosition?: { x: number, y: number };
    moveListener: (event: MouseEvent) => void = this.onMove.bind(this);

    constructor() {
        super({
            name: "Game Monitor Component",
            useReact: true,
            pageFilter: [ StadiaPage.PLAYER ]
        });
    }

    async onStart() {
        this.state = {
            renderer: null,
            items: [],
            sidebarOpen: false,
            loading: true,
            enabled: false,
            position: { x: 10, y: 10 }
        }

        Util.desandbox(MonitorRunnable);

        this.itemData = await Config.MONITOR_ITEMS.get();
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

            if (!this.state.enabled && !this.state.sidebarOpen) return;


            const { videoStream, videoCodec, audioCodec } = getStream(statArray);

            // TODO: Is it possible to move into a fined format. perhaps a class?
            let items = [
                {
                    name: 'Latency',
                    value: `${Math.round(ICECandidatePair.currentRoundTripTime! * 1000)} ms`,
                    visible: true,
                    id: 'latency',
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
                    value: `${formatBytes(ICECandidatePair.availableOutgoingBitrate!)}`,
                    visible: true,
                    id: 'bitrate',
                },
            ]

            // TODO: clean this up into its own function
            if (this.itemData !== null && this.itemData !== undefined) {
                items = items.sort((a, b) => this.itemData![a.id].index - this.itemData![b.id].index);
                items.forEach(item => item.visible = this.itemData![item.id].visible);

                if (Object.keys(this.itemData).length != items.length) {
                    this.itemData = {};
                    items.forEach((item, index) => this.itemData![item.id] = { index, visible: item.visible });
                }
            }
            else {
                this.itemData = {};
                items.forEach((item, index) => this.itemData![item.id] = { index, visible: item.visible });
            }

            console.log({items});
            this.setState(() => ({
                items
            }))
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

    onGrab() {
        window.addEventListener('mousemove', this.moveListener);

        const onRelease = () => {
            window.removeEventListener('mousemove', this.moveListener);
            window.removeEventListener('mouseup', onRelease);
        }
        window.addEventListener('mouseup', onRelease);
    }

    onMove(event: MouseEvent) {
        if(this.grabPosition === undefined) {
            this.grabPosition = { x: event.x - this.state.position.x, y: event.y - this.state.position.y };
        }

        this.setState(() => ({
            position: {
                x: event.x - this.grabPosition!.x,
                y: event.y - this.grabPosition!.y
            }
        }));
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
                }}
            >
                <Loader 
                    isLoading={this.state.loading}
                />
                
                <MonitorWrapper style={{ width: !this.state.sidebarOpen ? 'auto' : '' }}>
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
        top-0
        rounded-lg
        box-border
        text-white
        p-2
    `}
    z-index: 180;
    font-family: Overpass, sans-serif;
`

const MonitorWrapper = styled.div`
    ${tw`
        transition
    `}
    width: 22rem;
`
