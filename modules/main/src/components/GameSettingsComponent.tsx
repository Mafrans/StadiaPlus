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
                                this.updateContainer();
                            }
                        }
                    })
                }
            })
        });
        observer.observe(document.body, { childList: true })
    }

    async updateContainer() {
        if (document.querySelector('.EST2y') === null) {
            // Try again 4 times per second until it works
            setTimeout(this.updateContainer.bind(this), 250);
            return;
        }

        const container = document.createElement('div');
        container.id = 'stadiaplus-game-settings';
        const dataElement = document.querySelector('.EST2y');
        dataElement!.parentElement!.insertBefore(container, document.querySelector('.EST2y'));

        this.setState(() => ({
            container,
            uuid: dataElement!.getAttribute('data-app-id'),
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
                        options={ StadiaCodec.values().map(codec => ({ value: codec.name, label: codec.name })) }
                        onChange={ value => this.changeCodec(StadiaCodec.valueOf(value)) }
                    />
                </Section>
                <Section>
                    <Heading>Resolution</Heading>
                    <Dropdown
                        style={{ width: 250 }}
                        options={ StadiaResolution.values().map(resolution => ({ value: resolution.name, label: resolution.name })) }
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
        if (codecs === null) {
            codecs = {};
        }
        codecs[this.state.uuid] = value;

        Config.CODECS.set(codecs);
    }

    async changeResolution(value: StadiaResolution | undefined) {
        if (this.state.uuid === null || value === undefined) return;

        let resolutions = await Config.RESOLUTIONS.get();
        if (resolutions === null) {
            resolutions = {};
        }
        resolutions[this.state.uuid] = value;

        Config.CODECS.set(resolutions);
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
