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
import RTCIceCandidatePair = RTCStatistics.RTCIceCandidatePair;
import { CgChevronDown } from 'react-icons/cg';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { VscGripper } from 'react-icons/vsc';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Theme } from '../../../shared/Theme';
import { StadiaClasses } from '../StadiaClasses';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import MonitorItem from './subcomponents/MonitorItem';
import { Config } from '../../../shared/Config';

export interface GameMonitorItem {
    name: string
    value: string
    visible: boolean
    id: string
}

interface INetworkMonitorComponentState extends DefaultState {
    items: GameMonitorItem[]
    sidebarOpen: boolean
}

@PageFilter([StadiaPage.PLAYER])
@ReactComponent
export default class GameMonitorComponent extends AbstractComponent<DefaultProps, INetworkMonitorComponentState> {
    order: {[id: string]: number} | null = null;

    constructor() {
        super({ name: "Game Monitor Component" });

        this.state = {
            renderer: null,
            items: [],
            sidebarOpen: false,
        }
    }

    async onStart() {
        Util.desandbox(MonitorRunnable);

        this.order = await Config.MONITOR_ORDER.get();

        window.addEventListener('message', async event => {
            if(event.data.source === 'StadiaPlusNetworkMonitor' && !this.state.sidebarOpen) {
                const ICECandidatePair = RTCStatistic.from<RTCIceCandidatePair>(
                        event.data.stats[1], 
                        id => id.startsWith('RTCIceCandidatePair')
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
                        value: `${ICECandidatePair.bytesReceived!}`,
                        visible: true,
                        id: 'bytes-received',
                    },
                    {
                        name: 'Bytes Received',
                        value: `${ICECandidatePair.bytesReceived!}`,
                        visible: true,
                        id: 'bytes-received1',
                    },
                    {
                        name: 'Bytes Received',
                        value: `${ICECandidatePair.bytesReceived!}`,
                        visible: true,
                        id: 'bytes-received2',
                    },
                ]

                if (this.order !== null && this.order !== undefined) {
                    items = items.sort((a, b) => this.order![a.id] - this.order![b.id]);
                }
                else {
                    this.order = {};
                    items.forEach((item, index) => this.order![item.id] = index);
                }
                
                this.setState(() => ({
                    items
                }))
            }
        })
    }

    async onUpdate() {
        this.updateRenderer();

        const sidebar = document.querySelector(`.${StadiaClasses.PLAYER_SIDEBAR}`) as HTMLElement | null;
        const sidebarOpen = sidebar !== null && sidebar.style.opacity !== '0';
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

        if(this.order === null || this.order === undefined) return;

        for (const id of Object.keys(this.order)) {
            if(result.destination.index > result.source.index) {
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

    render(): null | React.ReactPortal {
        return ReactDOM.createPortal(
            <Wrapper style={{ backgroundColor: this.hexToRGBA(Theme.Colors.gray[900], this.state.sidebarOpen ? 1 : 0.25) }}>
                {
                    this.state.sidebarOpen ? (
                            <div>
                                <Header>
                                    <Heading>Game Monitor</Heading>
                                    <CgChevronDown />
                                </Header>
                                <Divider />
                            </div>
                        ): null
                }
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
    transition
  `}
  z-index: 180;
`

const Header = styled.div`
  ${tw`
    flex
    items-center
  
    p-4
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

const Divider = styled.h1`
  ${tw`
    border-0
    h-px
    mx-4
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