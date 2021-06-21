import { Config } from '../../../shared/Config';
import Logger from '../../../shared/Logger';
import { onPageChanged } from '../events/PageChangeEvent';
import Util from '../Util';
import { StadiaCodec } from '../../../shared/models/StadiaCodec';

type StadiaCodecData = {
    h264?: 'ExternalDecoder'
    vp9?: 'ExternalDecoder' | 'libvpx'
    'vp9-profile0'?: 'ExternalDecoder' | 'libvpx'
    'vp9-profile2'?: 'SoftwareDecoder' | 'libvpx'
}

const CodecComponent = () => {
    onPageChanged(async event => {
        if (event.page !== 'player') {
            return;
        }

        const codec = await Config.CODEC.get() || 'Automatic';

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

        setTimeout(async () => {
            if (codecData !== undefined) {
                localStorage.setItem('video_codec_implementation_by_codec_key', JSON.stringify(codecData));
                localStorage.setItem('video_codec_implementation_by_codec_key_using_local_check', JSON.stringify(codecData));
                localStorage.setItem('video_codec_implementation_by_codec_key_using_media_capabilities', JSON.stringify(codecData));
            }
            else {
                localStorage.removeItem('video_codec_implementation_by_codec_key');
                localStorage.removeItem('video_codec_implementation_by_codec_key_local_check');
                localStorage.removeItem('video_codec_implementation_by_codec_key_media_capabilities');
            }
        }, 1000)
        Logger.info(`Using codec '${codec}'`);
    });
}

export default CodecComponent;