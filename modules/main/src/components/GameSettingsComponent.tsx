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

interface IGameSettingsComponentState extends DefaultState{
    container: Element | null;
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
        document.querySelector('.EST2y')!.parentElement!.insertBefore(container, document.querySelector('.EST2y'));

        this.setState(() => ({
            container,
        }))
    }

    render(): null | React.ReactPortal {
        if(this.state.container === undefined || this.state.container === null) return null;

        return ReactDOM.createPortal(
            <Wrapper>
                <Section>
                    <StadiaPlusIcon />
                </Section>
                <Section>
                    <Heading>Codec</Heading>
                    <Dropdown
                        style={{ width: 250 }}
                        options={StadiaCodec.values().map(codec => ({ value: codec.name, label: codec.name }))}
                    />
                </Section>
                <Section>
                    <Heading>Resolution</Heading>
                    <Dropdown
                        style={{ width: 250 }}
                        options={StadiaResolution.values().map(resolution => ({ value: resolution.name, label: resolution.name }))}
                    />
                </Section>
            </Wrapper>,
            this.state.container,
        );
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
