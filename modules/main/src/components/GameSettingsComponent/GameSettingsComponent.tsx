import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import StadiaPlusIcon from '../shared/StadiaPlusIcon';
import { stadiaCodecs, StadiaCodec } from '../../../../shared/models/StadiaCodec';
import {  stadiaResolutions, StadiaResolution } from '../../../../shared/models/StadiaResolution';
import { Config } from '../../../../shared/Config';
import { StadiaPage } from '../../StadiaPage';
import SelectionSection from './components/SelectionArea.component';
import { StadiaSelectors } from '../../StadiaSelectors';
import Util from '../../Util';
import { onPageChanged } from '../../events/PageChangeEvent';


let uuid: string | null = null;

const GameSettingsComponent = () => {
    const [container, setContainer] = useState<Element | null>(null)
    const [codec, setCodec] = useState<StadiaCodec>('Automatic');
    const [resolution, setResolution] = useState<StadiaResolution>('Automatic');

    const updateContainer = async () => {
        const banner = document.querySelector(StadiaSelectors.GAME_INFO_HERO);
        const renderer = document.querySelector(StadiaSelectors.GAME_INFO_RENDERER);

        if (banner && renderer) {
            const container = document.createElement('div');
            container.id = 'stadiaplus-game-settings';
            banner.after(container);

            uuid = renderer.getAttribute('data-app-id');

            const codecs = await Config.CODECS.get() || {};
            const resolutions = await Config.RESOLUTIONS.get() || {};

            let codec: StadiaCodec = 'Automatic';
            let resolution: StadiaResolution = 'Automatic';

            if(uuid) {
                codec = codecs[uuid];
                resolution = resolutions[uuid];
            }

            setCodec(codec);
            setResolution(resolution);

            // Always set the container after setting codec/resolution
            setContainer(container);
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

    useEffect(() => {
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
    });

    if (container) {
        return ReactDOM.createPortal(<Wrapper>
            <Section>
                <StadiaPlusIcon />
            </Section>
            <Section>
                <SelectionSection
                    heading={'Codec'}
                    default={codec}
                    options={stadiaCodecs}
                    onChange={value => void changeCodec(value as StadiaCodec)}
                />
            </Section>
            <Section>
                <SelectionSection
                    heading={'Resolution'}
                    default={resolution}
                    options={stadiaResolutions}
                    onChange={value => void changeResolution(value as StadiaResolution)}
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