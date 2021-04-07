import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from '../AbstractComponent';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import StadiaPlusIcon from '../shared/StadiaPlusIcon';
import StadiaCodec from '../../../../shared/models/StadiaCodec';
import StadiaResolution from '../../../../shared/models/StadiaResolution';
import { Config } from '../../../../shared/Config';
import StadiaPage from '../../StadiaPage';
import SelectionSection from './components/SelectionArea.component';
import { StadiaSelectors } from '../../StadiaSelectors';
import Util from '../../Util';

interface IGameSettingsComponentState extends DefaultState {
    container: Element | null;
    uuid: string | null;
    codec: StadiaCodec;
    resolution: StadiaResolution;
}

export default class GameSettingsComponent extends AbstractComponent<DefaultProps, IGameSettingsComponentState> {
    constructor() {
        super({
            name: 'GameSettingsComponent',
            useReact: true,
            pageFilter: [ StadiaPage.HOME ]
        });
    }

    async onStart() {
        this.setState(() => ({
            container: null,
        }));

        Util.observe(document.body, 'childList', Node.ELEMENT_NODE, (mutation, node) => {
            const element = node as HTMLElement;
            if (element.classList.contains('llhEMd')) {
                // Once the ring animation starts playing, the container is done!
                const fn = () => {
                    this.updateContainer();
                    element.removeEventListener('animationstart', fn);
                }
                element.addEventListener('animationstart', fn);
            }
        });
    }

    async updateContainer() {
        const banner = document.querySelector(StadiaSelectors.GAME_INFO_HERO)!;
        const renderer = document.querySelector(StadiaSelectors.GAME_INFO_RENDERER)!;

        console.log({banner, renderer})

        const container = document.createElement('div');
        container.id = 'stadiaplus-game-settings';
        banner.after(container);

        const uuid = renderer.getAttribute('data-app-id');

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
        console.log({container: this.state.container})

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