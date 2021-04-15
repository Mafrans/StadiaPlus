import { Config } from '../../../shared/Config';
import Logger from '../Logger';
import { onPageChanged } from '../events/PageChangeEvent';
import Util from '../Util';
import { StadiaCodec } from '../../../shared/models/StadiaCodec';

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
        const codec: StadiaCodec = codecs[Util.getPlayerGameId()] || 'Automatic';

        let codecData: StadiaCodecData | undefined;
        switch (codec) {
            case 'VP9':
                codecData = { vp9: 'ExternalDecoder' }
                break

            case 'H264':
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

        Logger.info(`Using codec '${codec}'`);
    });
}

export default CodecComponent;