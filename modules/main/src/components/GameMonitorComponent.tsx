import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import ReactComponent from '../decorators/@ReactComponent';
import Util from '../Util';
// @ts-ignore
import MonitorRunnable from '../MonitorRunnable.txtjs';
import PageFilter from '../decorators/@PageFilter';
import StadiaPage from '../StadiaPage';
import ReactDOM from 'react-dom';
import { RTCStatistics } from '../RTCStatistics';
import RTCStatistic = RTCStatistics.RTCStatistic;
import { CgChevronDown, CgChevronUp } from 'react-icons/cg';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { VscGripper } from 'react-icons/vsc';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Theme } from '../../../shared/Theme';
import { StadiaClasses } from '../StadiaClasses';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import MonitorItem from './subcomponents/MonitorItem';
import { Config } from '../../../shared/Config';
import MDSpinner from 'react-md-spinner';

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

            const ICECandidatePair = RTCStatistic.from<RTCStatistics.RTCIceCandidatePair>(
                event.data.stats[1],
                id => id.startsWith('RTCIceCandidatePair')
            );

            if(this.state.loading && ICECandidatePair.bytesReceived! !== 0) {
                this.setState(() => ({
                    loading: false
                }));
            }

            if (!this.state.enabled && !this.state.sidebarOpen && this.state.items.length > 0) return;

            const audioStream = RTCStatistic.from<RTCStatistics.RTCAudioRTPStream>(
                event.data.stats[1],
                id => id.startsWith('RTCInboundRTPAudioStream')
            );

            const videoStream = RTCStatistic.from<RTCStatistics.RTCVideoRTPStream>(
                event.data.stats[1],
                id => id.startsWith('RTCInboundRTPVideoStream')
            );

            const audioCodec = RTCStatistic.from<RTCStatistics.RTCCodec>(
                event.data.stats[1],
                id => id === audioStream.codecId
            );

            const videoCodec = RTCStatistic.from<RTCStatistics.RTCCodec>(
                event.data.stats[1],
                id => id === videoStream.codecId
            );

            let items = [
                {
                    name: 'Latency',
                    value: `${Math.round(ICECandidatePair.currentRoundTripTime! * 1000)} ms`,
                    visible: true,
                    id: 'latency',
                },
                {
                    name: 'Bytes Received',
                    value: `${this.formatBytes(ICECandidatePair.bytesReceived!)}`,
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
                    value: `${this.formatBytes(ICECandidatePair.availableOutgoingBitrate!)}`,
                    visible: true,
                    id: 'bitrate',
                },
            ]

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

    hexToRGBA(hex: string, alpha?: number) {
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }

    reorder(list: GameMonitorItem[], startIndex: number, endIndex: number) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    onDragEnd(result: DropResult) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        if (this.order === null || this.order === undefined) return;

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

        const items = this.reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({
            items,
        });
    }

    formatBytes(value: number, decimals?: number): string {
        if (value === 0) {
            return "0 Bytes";
        }

        const exponent = Math.floor(Math.log(value) / Math.log(1024));
        const suffixes = ["Bytes", "KB", "MB", "GB", "TB", "PB"]
    
        return `${(value / Math.pow(1024, exponent)).toFixed(decimals || 2)} ${suffixes[exponent]}`;
    }
    
    toggleEnabled(): void {
        this.setState(state => ({ enabled: !state.enabled }))
    }

    grab() {
        window.addEventListener('mousemove', this.moveListener);
    }

    release() {
        window.removeEventListener('mousemove', this.moveListener);
        console.log('release')
    }

    onMove(event: MouseEvent) {
        if(this.grabPosition === undefined) {
            this.grabPosition = { x: event.x - this.state.position.x, y: event.y - this.state.position.y };
        }

        this.setState(state => ({
            position: {
                x: event.x - this.grabPosition!.x,
                y: event.y - this.grabPosition!.y
            }
        }));
    }

    render(): null | React.ReactPortal {
        if (!this.state.enabled && !this.state.loading && !this.state.sidebarOpen) return null;

        console.log(this.state.items);

        return ReactDOM.createPortal(
            <Wrapper 
                style={{ 
                    backgroundColor: this.hexToRGBA(Theme.Colors.gray[900], this.state.sidebarOpen ? 1 : 0.25),
                    left: this.state.position.x,
                    top: this.state.position.y,
                }}
            >
                {
                    this.state.loading
                        ? (
                            <Loader>
                                <MDSpinner size={16} style={{ marginRight: '1rem' }} singleColor='#ffffff' />
                                <span>Loading Monitor</span>
                            </Loader>
                        )
                        : (
                            <MonitorWrapper style={{ width: !this.state.sidebarOpen ? 'auto' : '' }}>
                                {
                                    this.state.sidebarOpen ? (
                                        <div>
                                            <Header onMouseDown={this.grab.bind(this)} onMouseUp={this.release.bind(this)}>
                                                <Heading>Game Monitor</Heading>
                                                <ToggleIcon aria-roledescription='button' onClick={() => this.toggleEnabled()}>
                                                    {
                                                        this.state.enabled
                                                            ? <CgChevronUp />
                                                            : <CgChevronDown />
                                                    }
                                                </ToggleIcon>
                                            </Header>
                                            {
                                                this.state.enabled 
                                                    ? <Divider /> 
                                                    : null
                                            }
                                        </div>
                                    ) : null
                                }
                                {
                                    this.state.enabled
                                        ? (
                                            <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
                                                <Droppable droppableId="list">
                                                    {
                                                        provided => (
                                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                                {
                                                                    this.state.items.map((item, index) => (
                                                                        <MonitorItem sidebarOpen={this.state.sidebarOpen} index={index} item={item} />
                                                                    ))
                                                                }
                                                                {provided.placeholder}
                                                            </div>
                                                        )
                                                    }
                                                </Droppable>
                                            </DragDropContext>
                                        )
                                        : null
                                }
                            </MonitorWrapper>
                        )
                }
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

const Loader = styled.div`
  ${tw`
    flex
    p-2
    items-center
  `}
`

const MonitorWrapper = styled.div`
  ${tw`
    transition
  `}
  width: 22rem;
`

const Header = styled.div`
  ${tw`
    flex
    items-center
  
    p-2
  `}
  background: ${Theme.Colors.neon.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Heading = styled.h1`
  ${tw`
    text-base
    font-normal
    mr-auto
  `}
`

const ToggleIcon = styled.div`
  ${tw`
    cursor-pointer
    flex
    items-center
  `}
`

const Divider = styled.h1`
  ${tw`
    border-0
    h-px
    m-2
  `}
  background-color: ${Theme.Colors.gray['700']};
`

const ItemContainer = styled.div`
  ${tw`
    flex
    py-4
  `}
`

const Column = styled.div`
  ${tw`
    px-4
  `}
  >* {
    margin-bottom: 0;
    margin-top: .5rem;

    &:first-child {
        margin-top: 0;
    }
  }
`