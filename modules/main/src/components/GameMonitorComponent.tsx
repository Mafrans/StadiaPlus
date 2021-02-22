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

interface GameMonitorItem {
    name: string
    value: string
    visible: boolean
}

interface INetworkMonitorComponentState extends DefaultState {
    items: GameMonitorItem[]
}

@PageFilter([StadiaPage.PLAYER])
@ReactComponent
export default class GameMonitorComponent extends AbstractComponent<DefaultProps, INetworkMonitorComponentState> {
    constructor() {
        super({ name: "Game Monitor Component" });

        this.state = {
            renderer: null,
            items: [],
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
    }

    render(): null | React.ReactPortal {
        console.log({items: this.state.items})

        return ReactDOM.createPortal(
            <Wrapper>
                <Header>
                    <Heading>Network Monitor</Heading>
                    <CgChevronDown />
                </Header>
                <Divider />
                <ItemContainer>
                    <Column>
                        {
                            this.state.items.map(item => (
                                <ItemTitle>{ item.name }</ItemTitle>
                            ))
                        }
                    </Column>
                    <Column>
                        {
                            this.state.items.map(item => (
                                <ItemValue>{ item.value }</ItemValue>
                            ))
                        }
                    </Column>
                    <Column>
                        {
                            this.state.items.map(item => (
                                <ItemIcons>
                                    {
                                        item.visible
                                        ? <AiOutlineEye />
                                        : <AiOutlineEyeInvisible />
                                    }
                                    <VscGripper />
                                </ItemIcons>
                            ))
                        }
                    </Column>
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
  `}
  z-index: 180;
  background-color: ${Theme.Colors.gray['900']};
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
`

const ItemTitle = styled.p`
  ${tw`
    font-medium
    mb-1
  `}
`

const ItemValue = styled.p`
  ${tw`
    font-light
    mb-1
  `}
`

const ItemIcons = styled.p`
  ${tw`
    mb-1
  `}
`

