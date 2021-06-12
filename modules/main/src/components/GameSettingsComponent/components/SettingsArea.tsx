import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ReactDOM from 'react-dom';
import { Theme } from '../../../../../shared/Theme';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { StadiaSelectors } from '../../../StadiaSelectors';
import Dropdown from '../../shared/Dropdown';
import { StadiaCodec, stadiaCodecs } from '../../../../../shared/models/StadiaCodec';
import { StadiaResolution, stadiaResolutions } from '../../../../../shared/models/StadiaResolution';
import { onPageChanged } from '../../../events/PageChangeEvent';
import { Config } from '../../../../../shared/Config';

export type SettingsAreaProps = {
    visible: boolean
    onClose: () => void
    onCodecChange: (value: StadiaCodec) => void
    onResolutionChange: (value: StadiaResolution) => void
}

export default function SettingsArea(props: SettingsAreaProps) {
    const [codec, setCodec] = useState<StadiaCodec>();
    const [resolution, setResolution] = useState<StadiaResolution>();

    useEffect(() => {
        onPageChanged(async event => {
            if (event.page === 'home') {
                console.log(await Config.CODEC.get(), await Config.RESOLUTION.get())
                setCodec(await Config.CODEC.get() || 'Automatic' as StadiaCodec);
                setResolution(await Config.RESOLUTION.get() || 'Automatic' as StadiaResolution);
            }
        })

        window.addEventListener('click', event => {
            if (event.target instanceof HTMLElement && !event.target.matches('.MmEIfc, .MmEIfc *')) {
                props.onClose();
            }
        });
    }, [])

    if (!codec && !resolution) return null;
    else return <Wrapper
        className={'MmEIfc'} // The 'MmEIfc' classname is used by Stadia to position nav popups
        visible={props.visible}
    >
        <Heading>Startup Options</Heading>
        <Row>
            <Name>Selected Codec</Name>
            <Dropdown
                style={{ minWidth: '10rem' }}
                default={codec}
                onChange={val => {
                    setCodec(val as StadiaCodec);
                    props.onCodecChange(val as StadiaCodec);
                }}
                options={stadiaCodecs}
            />
        </Row>
        <Row>
            <Name>Selected Resolution</Name>
            <Dropdown
                style={{ minWidth: '10rem' }}
                default={resolution}
                onChange={val => {
                    setResolution(val as StadiaResolution);
                    props.onResolutionChange(val as StadiaResolution);
                }}
                options={stadiaResolutions}
            />
        </Row>
    </Wrapper>;
}

const Wrapper = styled.div<{ visible: boolean }>`
    ${props => `
        opacity: ${props.visible ? 1 : 0};
        pointer-events: ${props.visible ? 'all' : 'none'};
        transform: translateY(${props.visible ? 0 : -8}px);
    `}

    ${tw`
        top-0 right-0 z-10
        box-border
        rounded-lg
        p-6 m-2
    `}
    
    /* Must be !important, or else the 'MmEIfc' class will override it */
    position: absolute !important;
  
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    background: ${Theme.Colors.gray['800']}
`;

const Heading = styled.h2`
    ${tw`
        text-2xl
        font-semibold
        mb-4
    `}
    font-family: Overpass, sans-serif;
`

const Row = styled.div`
    ${tw`
        flex items-center
        mt-2
    `}
`

const Name = styled.h3`
    ${tw`
        text-sm
        font-light
        w-48
    `}
    font-family: Overpass, sans-serif;
`
