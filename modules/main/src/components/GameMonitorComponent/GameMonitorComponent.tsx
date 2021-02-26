import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from '../AbstractComponent';
import ReactComponent from '../../decorators/@ReactComponent';
import Util from '../../Util';
// @ts-ignore
import MonitorRunnable from '../../MonitorRunnable.txtjs';
import PageFilter from '../../decorators/@PageFilter';
import StadiaPage from '../../StadiaPage';
import ReactDOM from 'react-dom';
import { RTCStatistics } from '../../RTCStatistics';
import RTCStatistic = RTCStatistics.RTCStatistic;
import tw from 'twin.macro';
import { Theme } from '../../../../shared/Theme';
import { StadiaClasses } from '../../StadiaClasses';
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

@PageFilter([StadiaPage.PLAYER])
@ReactComponent
export default class GameMonitorComponent extends AbstractComponent<DefaultProps, INetworkMonitorComponentState> {
    order: { [id: string]: number } | null = null;
    messageListener = this.onMessageCapture.bind(this);

    grabPosition?: { x: number, y: number };
    moveListener: (event: MouseEvent) => void = this.onMove.bind(this);

    constructor() {
        super({ name: "Game Monitor Component" });
    }

    async onStart() {
        Util.desandbox(MonitorRunnable);

        this.state = {
            renderer: null,
            items: [],
            sidebarOpen: false,
            loading: true,
            enabled: false,
            position: { x: 10, y: 10 }
        }

        this.order = await Config.MONITOR_ORDER.get();
        window.addEventListener('message', this.messageListener);
    }

    async onStop() {
        window.removeEventListener('message', this.messageListener);
        console.log('STOPPED!!!')
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

            if (!this.state.enabled && !this.state.sidebarOpen && this.state.items.length > 0) return;

             
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

            console.log({items});

            // TODO: clean this up into its own function
            if (this.order !== null && this.order !== undefined) {
                items = items.sort((a, b) => this.order![a.id] - this.order![b.id]);

                if (Object.keys(this.order).length != items.length) {
                    this.order = {};
                    items.forEach((item, index) => this.order![item.id] = index);
                }
            }
            else {
                this.order = {};
                items.forEach((item, index) => this.order![item.id] = index);
            }

            this.setState(() => ({
                items
            }))
        }
    }

    async onUpdate() {
        this.updateRenderer();

        const sidebar = document.querySelector(`.${StadiaClasses.PLAYER_SIDEBAR}`) as HTMLElement | null;
        const sidebarOpen = sidebar !== null && sidebar.style.opacity === '1';
        if (this.state.sidebarOpen !== sidebarOpen) {
            this.setState(() => ({
                sidebarOpen
            }));
        }
    }

    onDragEnd (result: DropResult) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        if (this.order === null || this.order === undefined) return;
        // TOOD: Move this forof into a function to clarify what this does
        for (const id of Object.keys(this.order)) {
            if (result.destination.index > result.source.index) {
                if (this.order[id] > result.source.index && this.order[id] <= result.destination.index) {
                    this.order[id]--;
                }
            }
            else {
                if (this.order[id] < result.source.index && this.order[id] >= result.destination.index) {
                    this.order[id]++;
                }
            }
        }
        this.order[result.draggableId] = result.destination.index;
        Config.MONITOR_ORDER.set(this.order);

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
