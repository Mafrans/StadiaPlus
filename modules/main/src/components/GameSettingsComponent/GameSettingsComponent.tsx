import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import StadiaPlusIcon from '../shared/StadiaPlusIcon';
import { stadiaCodecs, StadiaCodec } from '../../../../shared/models/StadiaCodec';
import {  stadiaResolutions, StadiaResolution } from '../../../../shared/models/StadiaResolution';
import { Config } from '../../../../shared/Config';
import { StadiaPage } from '../../StadiaPage';
import { StadiaSelectors } from '../../StadiaSelectors';
import Util from '../../Util';
import { onPageChanged } from '../../events/PageChangeEvent';
import { CgClose, CgOptions } from 'react-icons/cg';
import SettingsArea from './components/SettingsArea';
import { SelectionSection } from './components/SelectionSection';

let uuid: string | null = null;
const GameSettingsComponent = () => {
    let [container, setContainer] = useState<Element | null>(null)
    const [codec, setCodec] = useState<StadiaCodec>('Automatic');
    const [resolution, setResolution] = useState<StadiaResolution>('Automatic');
    const [visible, setVisible] = useState<boolean>(false);

    const updateContainer = async (newContainer: Element) => {
        const id = "stadiaplus_gamecontainer-" + Math.floor(Math.random() * 10000);
        newContainer.id = id;

        const renderer = document.querySelector( `#${id} ${StadiaSelectors.PLAY_BUTTON_RENDERER}`);
        if (renderer) {
            uuid = renderer.getAttribute('data-app-id');
        }

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
        setContainer(newContainer);
        setVisible(false);
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
        setInterval(() => {
            let playButton = document.querySelector(StadiaSelectors.GAME_INFO_RENDERER + ' ' + StadiaSelectors.PLAY_BUTTON);
            if (!playButton) {
                playButton = document.querySelector(StadiaSelectors.PLAY_BUTTON);
            }

            if(playButton) {
                const parent = Util.parent(playButton, 3)!
                if (!container?.isEqualNode(parent)) {
                    console.log({container, parent})
                    void updateContainer(parent);
                    container = parent;
                }
            }
        }, 1000);
    }, []);

    if (container) {
        return ReactDOM.createPortal(<Container>
            <OpenButton onClick={() => setVisible(true)}>
                <CgOptions size={24} />
            </OpenButton>

            <SettingsArea
                container={container}
                visible={visible}
            >
                <CloseButton onClick={() => setVisible(false) }>
                    <CgClose />
                </CloseButton>
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
            </SettingsArea>
        </Container>, container.firstElementChild!);
    }
    return null;
}

const Section = styled.section`
  ${tw`
    pr-8
  `}
`;

const Container = styled.div`
    ${tw`
        absolute
        flex
        justify-center
        items-center
    `}
    top: 0%;
    left: 100%;
    height: 7rem;
    width: 5rem;
`

const OpenButton = styled.div`
    ${tw`
        p-2
        rounded-full
    `}
    border: 2px solid white;
`

const CloseButton = styled.div`
    ${tw`
        absolute
        flex
        top-0 right-0
        p-3 m-4
        rounded-full
        cursor-pointer
    `}
    
    background: rgba(255, 255, 255, 0.03);
    &:hover {
        background: rgba(255, 255, 255, 0.06);
    }
`

export default GameSettingsComponent;