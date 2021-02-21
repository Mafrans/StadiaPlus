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
            items: []
        }
    }

    async onStart() {
        Util.desandbox(MonitorRunnable);

        window.addEventListener('message', async event => {
            if(event.data.source === 'StadiaPlusNetworkMonitor') {
                const stats = await this.parseStats(event.data.stats[1]);
                console.log('trying to update state')
                const rtt = Math.round((stats.find(it => it.id.startsWith('RTCIceCandidatePair')) as RTCStatistics.RTCIceCandidatePair).currentRoundTripTime * 1000);
                console.log({rtt, ice: stats.find(it => it.id.startsWith('RTCIceCandidatePair')) as RTCStatistics.RTCIceCandidatePair})
                this.setState(() => ({
                    items: [
                        {
                            name: 'Latency',
                            value: rtt + 'ms',
                            visible: true,
                        }
                    ]
                }))
            }
        })
    }

    async onUpdate() {
        this.updateRenderer();
    }

    async parseStats(stats: [string, any]): Promise<RTCStatistic[]> {
        const statistics: RTCStatistic[] = [];

        for (let stat of stats) {
            if(stat[0].startsWith('RTCAudioSource')) {
                statistics.push(stat[1] as RTCStatistics.RTCAudioSource);
            }
            else if(stat[0].startsWith('RTCCertificate')) {
                statistics.push(stat[1] as RTCStatistics.RTCCertificate);
            }
            else if(stat[0].startsWith('RTCCodec')) {
                const rtc = stat[1] as RTCStatistics.RTCCodec;
                rtc.direction = stat[0].indexOf('Inbound') !== -1 ? 'inbound' : 'outbound';

                statistics.push(rtc);
            }
            else if(stat[0].startsWith('RTCDataChannel')) {
                statistics.push(stat[1] as RTCStatistics.RTCDataChannel);
            }
            else if(stat[0].startsWith('RTCIceCandidatePair')) {
                statistics.push(stat[1] as RTCStatistics.RTCIceCandidatePair);
            }
            else if(stat[0].startsWith('RTCIceCandidate')) {
                statistics.push(stat[1] as RTCStatistics.RTCIceCandidate);
            }
            else if(stat[0].indexOf('RTPAudioStream') !== -1) {
                statistics.push(stat[1] as RTCStatistics.RTCAudioRTPStream);
            }
            else if(stat[0].indexOf('RTPVideoStream') !== -1) {
                statistics.push(stat[1] as RTCStatistics.RTCVideoRTPStream);
            }
            else if(stat[0].startsWith('RTCMediaStreamTrack')) {
                statistics.push(stat[1] as RTCStatistics.RTCMediaStreamTrack);
            }
            else if(stat[0].startsWith('RTCMediaStream')) {
                statistics.push(stat[1] as RTCStatistics.RTCMediaStream);
            }
            else if(stat[0].startsWith('RTCTransport')) {
                statistics.push(stat[1] as RTCStatistics.RTCTransport);
            }
            else if(stat[0].startsWith('RTCPeerConnection')) {
                statistics.push(stat[1] as RTCStatistics.RTCPeerConnection);
            }
        }

        return statistics;
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
                                <b>{ item.name }</b>
                            ))
                        }
                    </Column>
                    <Column>
                        {
                            this.state.items.map(item => (
                                <span>{ item.value }</span>
                            ))
                        }
                    </Column>
                    <Column>
                        {
                            this.state.items.map(item => (
                                <div>
                                    {
                                        item.visible
                                        ? <AiOutlineEye />
                                        : <AiOutlineEyeInvisible />
                                    }
                                    <VscGripper />
                                </div>
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
    ml-auto
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
    p-4
  `}
`

const Column = styled.div`
  ${tw``}
`

