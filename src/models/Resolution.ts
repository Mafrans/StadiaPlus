/**
 * The different kinds of resolutions, represented as numbers.
 *
 * @export the Resolution type
 * @class Resolution
 */

export class Resolution {
    /**
     * Automatic, let Stadia handle resolutions.
     */
    static AUTOMATIC = 0;

    /**
     * 4K, or 3840x2160
     */
    static UHD_4K = 1;

    /**
     * WQHD, or 2560x1440
     */
    static WQHD = 2;

    /**
     * Full HD, or 1920x1080
     */
    static FHD = 3;

    /**
     * HD, or 1280x720
     */
    static HD = 4;
}
