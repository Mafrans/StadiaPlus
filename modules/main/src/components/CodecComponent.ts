import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import { StadiaPage } from '../StadiaPage';
import { Config } from '../../../shared/Config';
import StadiaCodec from '../../../shared/models/StadiaCodec';
import Logger from '../Logger';
import { onPageChanged } from '../events/PageChangeEvent';
import Util from '../Util';

type StadiaCodecData = {
    h264?: 'ExternalDecoder'
    vp9?: 'ExternalDecoder' | 'libvpx',
    'vp9-profile0'?: 'libvpx'
}

const CodecComponent = () => {
    onPageChanged(async event => {
        if (event.page !== 'player') {
            return;
        }

        const codecs = await Config.CODECS.get() || {};
        const codec = codecs[Util.getPlayerGameId()] || StadiaCodec.AUTOMATIC;

        let codecData: StadiaCodecData | undefined;
        switch (codec.name) {
            case StadiaCodec.VP9.name:
                codecData = { vp9: 'ExternalDecoder' }
                break

            case StadiaCodec.H264.name:
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

        Logger.info(`Using codec '${codec.name}'`);
    })
}

export default CodecComponent;