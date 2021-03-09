import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import StadiaPage from '../StadiaPage';
import { Config } from '../../../shared/Config';
import StadiaCodec from '../../../shared/models/StadiaCodec';

export default class CodecComponent extends AbstractComponent<DefaultProps, DefaultState> {
    constructor() {
        super({
            name: "Codec Component",
            pageFilter: [ StadiaPage.PLAYER ]
        });
    }

    async onStart() {

        const codecs = await Config.CODECS.get() || {};
        const codec = codecs[this.parsePlayerUUID()] || StadiaCodec.AUTOMATIC;

        let codecData: StadiaCodecData | undefined;

        switch (codec) {
            case StadiaCodec.VP9:
                codecData = { vp9: 'ExternalDecoder' }
                break

            case StadiaCodec.H264:
                codecData = {
                    h264: 'ExternalDecoder',
                    vp9: 'libvpx',
                    'vp9-profile0': 'libvpx'
                }
                break
        }

        if (codecData !== undefined) {
            localStorage.setItem('video_codec_implementation_by_codec_key', JSON.stringify(codecData));
        }
        else {
            localStorage.removeItem('video_codec_implementation_by_codec_key');
        }
    }

    parsePlayerUUID() {
        // Each UUID is 36 characters long
        return location.pathname.substring('/player/'.length, '/player/'.length + 36)
    }

    async onUpdate() {}
}

type StadiaCodecData = {
    h264?: 'ExternalDecoder'
    vp9?: 'ExternalDecoder' | 'libvpx',
    'vp9-profile0'?: 'libvpx'
}