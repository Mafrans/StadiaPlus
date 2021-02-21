import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import ReactComponent from '../decorators/@ReactComponent';
import Dropdown from './subcomponents/Dropdown';
import ReactDOM from 'react-dom';
import GameCard from './subcomponents/GameCard';
import styled from 'styled-components';
import tw from 'twin.macro';
import StadiaPlusIcon from './subcomponents/StadiaPlusIcon';
import StadiaCodec from '../../../shared/models/StadiaCodec';
import StadiaResolution from '../../../shared/models/StadiaResolution';
import { Config } from '../../../shared/Config';

interface IGameSettingsComponentState extends DefaultState{
    container: Element | null;
    uuid: string | null;
    codec: StadiaCodec;
    resolution: StadiaResolution;
}

@ReactComponent
export default class GameSettingsComponent extends AbstractComponent<DefaultProps, IGameSettingsComponentState> {
    constructor() {
        super({ name: "GameSettingsComponent" });
    }

    async onStart() {
        this.setState(() => ({
            container: null,
        }))

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    console.log('1');
                    mutation.addedNodes.forEach(node => {
                        // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
                        if (node.nodeType === 1) {
                            const element = node as HTMLElement;
                            if(element.classList.contains('llhEMd')) {
                                this.updateContainer(0);
                            }
                        }
                    })
                }
            })
        });
        observer.observe(document.body, { childList: true })
    }

    async updateContainer(gen: number) {
        if (document.querySelector('.EST2y') === null) {
            // Try again 4 times per second until it works, or until it reaches the 8th generation (2 seconds)
            if(gen < 8) {
                setTimeout(() => this.updateContainer(gen+1), 250);
            }
            return;
        }

        const container = document.createElement('div');
        container.id = 'stadiaplus-game-settings';
        const dataElement = document.querySelector('.EST2y');
        dataElement!.parentElement!.insertBefore(container, document.querySelector('.EST2y'));

        const uuid = dataElement!.getAttribute('data-app-id');

        const codecs = await Config.CODECS.get();
        const resolutions = await Config.RESOLUTIONS.get();

        let defaultCodec = StadiaCodec.AUTOMATIC;
        if (codecs && codecs[uuid!] !== undefined) {
            defaultCodec = codecs[uuid!];
        }

        let defaultResolution = StadiaResolution.AUTOMATIC;
        if (resolutions && resolutions[uuid!] !== undefined) {
            defaultResolution = resolutions[uuid!];
        }

        this.setState(() => ({
            container,
            uuid,
            codec: defaultCodec,
            resolution: defaultResolution,
        }))
    }

    render(): null | React.ReactPortal {
        if(this.state.container === undefined
            || this.state.container === null
            || this.state.uuid === null
        ) return null;

        return ReactDOM.createPortal(
            <Wrapper>
                <Section>
                    <StadiaPlusIcon />
                </Section>
                <Section>
                    <Heading>Codec</Heading>
                    <Dropdown
                        style={{ width: 250 }}
                        default={ this.state.codec.name }
                        options={ StadiaCodec.values().map(codec => codec.name) }
                        onChange={ value => this.changeCodec(StadiaCodec.valueOf(value)) }
                    />
                </Section>
                <Section>
                    <Heading>Resolution</Heading>
                    <Dropdown
                        style={{ width: 250 }}
                        default={ this.state.resolution.name }
                        options={ StadiaResolution.values().map(resolution => resolution.name) }
                        onChange={ value => this.changeResolution(StadiaResolution.valueOf(value)) }
                    />
                </Section>
            </Wrapper>,
            this.state.container,
        );
    }

    async changeCodec(value: StadiaCodec | undefined) {
        if (this.state.uuid === null || value === undefined) return;

        let codecs = await Config.CODECS.get();
        if (codecs === null || codecs === undefined) {
            codecs = {};
        }
        codecs[this.state.uuid] = value;

        Config.CODECS.set(codecs);

        this.setState(() => ({
            codec: value,
        }))
    }

    async changeResolution(value: StadiaResolution | undefined) {
        if (this.state.uuid === null || value === undefined) return;

        let resolutions = await Config.RESOLUTIONS.get();
        if (resolutions === null || resolutions === undefined) {
            resolutions = {};
        }
        resolutions[this.state.uuid] = value;

        Config.RESOLUTIONS.set(resolutions);

        this.setState(() => ({
            resolution: value,
        }))
    }
}

const Wrapper = styled.div`
  ${tw`
    flex
    items-center
    p-8
  `}
`

const Section = styled.section`
  ${tw`
    pr-8
  `}
`

const Heading = styled.section`
  ${tw`
    mb-2
  `}
  font-family: Overpass, sans-serif;
`
