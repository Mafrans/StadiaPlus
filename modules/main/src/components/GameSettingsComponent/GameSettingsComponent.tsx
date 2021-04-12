import React, { useState } from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from '../AbstractComponent';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import StadiaPlusIcon from '../shared/StadiaPlusIcon';
import StadiaCodec from '../../../../shared/models/StadiaCodec';
import StadiaResolution from '../../../../shared/models/StadiaResolution';
import { Config } from '../../../../shared/Config';
import { StadiaPage } from '../../StadiaPage';
import SelectionSection from './components/SelectionArea.component';
import { StadiaSelectors } from '../../StadiaSelectors';
import Util from '../../Util';
import { onPageChanged } from '../../events/PageChangeEvent';

interface IGameSettingsComponentState extends DefaultState {
    container: Element | null;
    uuid: string | null;
    codec: StadiaCodec;
    resolution: StadiaResolution;
}

const GameSettingsComponent = () => {
    const [container, setContainer] = useState<Element | null>(null)
    const [codec, setCodec] = useState<StadiaCodec>(StadiaCodec.AUTOMATIC);
    const [resolution, setResolution] = useState<StadiaResolution>(StadiaResolution.AUTOMATIC);
    let uuid: string | null = null;

    const updateContainer = async () => {
        const banner = document.querySelector(StadiaSelectors.GAME_INFO_HERO);
        const renderer = document.querySelector(StadiaSelectors.GAME_INFO_RENDERER);

        if (banner && renderer) {
            const container = document.createElement('div');
            container.id = 'stadiaplus-game-settings';
            banner.after(container);

            uuid = renderer.getAttribute('data-app-id');

            const codecs = await Config.CODECS.get();
            const resolutions = await Config.RESOLUTIONS.get();

            let codec = StadiaCodec.AUTOMATIC;
            let resolution = StadiaResolution.AUTOMATIC;

            if(uuid) {
                if(codecs) {
                    codec = codecs[uuid!];
                }

                if (resolutions) {
                    resolution = resolutions[uuid!];
                }
            }

            setContainer(container);
            setCodec(codec);
            setResolution(resolution);
        }
    }

    const changeCodec = async (value: StadiaCodec) => {
        if (!uuid) {
            return;
        }

        const codecs = await Config.CODECS.get() || {};
        codecs[uuid] = value;

        void Config.CODECS.set(codecs);
        setCodec(value);
    }

    const changeResolution = async (value: StadiaResolution) => {
        if (!uuid) {
            return;
        }

        const resolutions = await Config.RESOLUTIONS.get() || {};
        resolutions[uuid] = value;

        void Config.RESOLUTIONS.set(resolutions);
        setResolution(value);
    }

    onPageChanged(event => {
        Util.observe(document.body, 'childList', Node.ELEMENT_NODE, (mutation, node) => {
            const element = node as HTMLElement;
            if (element.classList.contains('llhEMd')) {
                // Once the ring animation starts playing, the container is done!
                const fn = () => {
                    void updateContainer();
                    element.removeEventListener('animationstart', fn);
                }
                element.addEventListener('animationstart', fn);
            }
        });
    })

    if (container) {
        ReactDOM.createPortal(<Wrapper>
            <Section>
                <StadiaPlusIcon />
            </Section>
            <Section>
                <SelectionSection
                    heading={'Codec'}
                    default={codec.name}
                    options={StadiaCodec.values().map(codec => codec.name)}
                    onChange={value => {
                        const codec = StadiaCodec.valueOf(value);
                        if (codec) {
                            void changeCodec(codec);
                        }
                    }}
                />
            </Section>
            <Section>
                <SelectionSection
                    heading={'Resolution'}
                    default={resolution.name}
                    options={StadiaResolution.values().map(res => res.name)}
                    onChange={value => {
                        const resolution = StadiaResolution.valueOf(value);
                        if (resolution) {
                            void changeResolution(resolution)
                        }
                    }}
                />
            </Section>
        </Wrapper>, container);
    }
    return null;
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

export default GameSettingsComponent;