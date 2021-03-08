import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from '../AbstractComponent';
import ReactComponent from '../../decorators/@ReactComponent';
import Dropdown from '../subcomponents/Dropdown';
import ReactDOM from 'react-dom';
import GameCard from '../subcomponents/GameCard';
import styled from 'styled-components';
import tw from 'twin.macro';
import StadiaPlusIcon from '../subcomponents/StadiaPlusIcon';
import StadiaCodec from '../../../../shared/models/StadiaCodec';
import StadiaResolution from '../../../../shared/models/StadiaResolution';
import { Config } from '../../../../shared/Config';
import PageFilter from '../../decorators/@PageFilter';
import StadiaPage from '../../StadiaPage';
import SelectionSection from './components/SelectionArea.component';

interface IGameSettingsComponentState extends DefaultState {
    container: Element | null;
    uuid: string | null;
    codec: StadiaCodec;
    resolution: StadiaResolution;
}

@PageFilter([StadiaPage.HOME])
@ReactComponent
export default class GameSettingsComponent extends AbstractComponent<DefaultProps, IGameSettingsComponentState> {
    constructor() {
        super({ name: 'GameSettingsComponent' });
    }

    async onStart() {
        this.setState(() => ({
            container: null,
        }));

        this.observe(document.body, 'childList', Node.ELEMENT_NODE, (mutation, node) => {
            const element = node as HTMLElement;
            if (element.classList.contains('llhEMd')) {
                // Checks for when a specific transition ends, at that point the container should be loaded
                const listener = (event: TransitionEvent) => {
                    if (event.elapsedTime === 0.167) {
                        this.updateContainer();

                        // Only run this once, discard the entire event listener as soon as possible
                        element.removeEventListener('transitionend', listener);
                    }
                };

                element.addEventListener('transitionend', listener);
            }
        });
    }

    async observe(element: Element, mutationType: MutationRecordType, nodeType: number, callback: (mutation: MutationRecord, node: Node) => void) {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === mutationType) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === nodeType) {
                            callback(mutation, node);
                        }
                    });
                }
            });
        });

        observer.observe(element, {
            childList: mutationType === 'childList',
            attributes: mutationType === 'attributes',
            characterData: mutationType === 'characterData'
        });
    }

    async updateContainer() {
        const dataElement = document.querySelector('.EST2y');
        if (dataElement === null) return

        const container = document.createElement('div');
        container.id = 'stadiaplus-game-settings';
        dataElement.parentElement!.insertBefore(container, dataElement);

        const uuid = dataElement.getAttribute('data-app-id');

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
        }));
    }

    render(): null | React.ReactPortal {
        if (!this.state.active
            || this.state.container === undefined
            || this.state.container === null
            || this.state.uuid === null
        ) return null;

        return ReactDOM.createPortal(
            <Wrapper>
                <Section>
                    <StadiaPlusIcon />
                </Section>
                <Section>
                    <SelectionSection
                        heading={'Codec'}
                        default={this.state.codec.name}
                        options={StadiaCodec.values().map(codec => codec.name)}
                        onChange={value => this.changeCodec(StadiaCodec.valueOf(value))}
                    />
                </Section>
                <Section>
                    <SelectionSection
                        heading={'Resolution'}
                        default={this.state.resolution.name}
                        options={StadiaResolution.values().map(res => res.name)}
                        onChange={value => this.changeResolution(StadiaResolution.valueOf(value))}
                    />
                </Section>
            </Wrapper>,
            this.state.container,
        );
    }

    async changeCodec(value?: StadiaCodec) {
        if (this.state.uuid === null || value === undefined) return;

        const codecs = await Config.CODECS.get() || {};
        codecs[this.state.uuid] = value;

        void Config.CODECS.set(codecs);

        this.setState(() => ({
            codec: value,
        }));
    }

    async changeResolution(value?: StadiaResolution) {
        if (this.state.uuid === null || value === undefined) return;

        const resolutions = await Config.RESOLUTIONS.get() || {};
        resolutions[this.state.uuid] = value;

        void Config.RESOLUTIONS.set(resolutions);

        this.setState(() => ({
            resolution: value,
        }));
    }
}

const Wrapper = styled.div`
  ${tw`
    flex
    items-center
    p-8
  `}
`;

const Section = styled.section`
  ${tw`
    pr-8
  `}
`;