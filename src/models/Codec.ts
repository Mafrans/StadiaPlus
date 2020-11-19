/**
 * The different kinds of codecs, represented as numbers.
 *
 * @export the Codec type
 * @class Codec
 */

export class Codec {
    /**
     * Automatic codec, let Stadia decide on it's own.
     */
    static AUTOMATIC = 0;

    /**
     * VP9 codec, usually works better than H264 but at the cost of lower quality.
     */
    static VP9 = 1;

    /**
     * H264 codec, high quality and Mac-OS compatible codec but with latency issues.
     */
    static H264 = 2;
}
