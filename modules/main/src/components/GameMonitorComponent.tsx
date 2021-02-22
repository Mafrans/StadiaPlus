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

interface GameMonitorItem {
    name: string
    value: string
    visible: boolean
}

interface INetworkMonitorComponentState extends DefaultState {
    items: GameMonitorItem[]
    sidebarOpen: boolean
}

@PageFilter([StadiaPage.PLAYER])
@ReactComponent
export default class GameMonitorComponent extends AbstractComponent<DefaultProps, INetworkMonitorComponentState> {
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

        window.addEventListener('message', async event => {
            if(event.data.source === 'StadiaPlusNetworkMonitor') {

                const ICECandidatePair = RTCStatistic.from<RTCIceCandidatePair>(
                        event.data.stats[1], 
                        id => id.startsWith('RTCIceCandidatePair')
                    );
                
                this.setState(() => ({
                    items: [
                        {
                            name: 'Latency',
                            value: `${Math.round(ICECandidatePair.currentRoundTripTime! * 1000)} ms`,
                            visible: true,
                        },
                        {
                            name: 'Bytes Received',
                            value: `${ICECandidatePair.bytesReceived!}`,
                            visible: true,
                        },
                    ]
                }))
            }
        })
    }

    async onUpdate() {
        this.updateRenderer();

        const sidebar = document.querySelector(`.${StadiaClasses.PLAYER_SIDEBAR}`) as HTMLElement | null;
        const sidebarOpen = sidebar !== null && sidebar.style.opacity !== '0';
        console.log({ sidebar, sidebarOpen })
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

    render(): null | React.ReactPortal {
        return ReactDOM.createPortal(
            <Wrapper style={{ backgroundColor: this.hexToRGBA(Theme.Colors.gray[900], this.state.sidebarOpen ? 1 : 0.25) }}>
                {
                    this.state.sidebarOpen ? (
                            <div>
                                <Header>
                                    <Heading>Network Monitor</Heading>
                                    <CgChevronDown />
                                </Header>
                                <Divider />
                            </div>
                        ): null
                }
                <ItemContainer style={{ opacity: this.state.sidebarOpen ? 1 : 0.75 }}>
                    <Column>
                        {
                            this.state.items.map(item => (
                                <p style={{ fontWeight: 500 }}>{ item.name }</p>
                            ))
                        }
                    </Column>
                    <Column>
                        {
                            this.state.items.map(item => (
                                <p style={{ fontWeight: 300 }}>{ item.value }</p>
                            ))
                        }
                    </Column>
                    {
                    this.state.sidebarOpen ? (
                        <Column>
                            {
                                this.state.items.map(item => (
                                    <p>
                                        {
                                            item.visible
                                            ? <AiOutlineEye />
                                            : <AiOutlineEyeInvisible />
                                        }
                                        <VscGripper />
                                    </p>
                                ))
                            }
                        </Column>
                        ): null
                    }
                </ItemContainer>
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