export default class StadiaCodec {
    public static AUTOMATIC = new StadiaCodec('Automatic');
    public static VP9 = new StadiaCodec('VP9');
    public static H264 = new StadiaCodec('H264');

    name: string;
    constructor(name: string) {
        this.name = name;
    }

    static values(): StadiaCodec[] {
        return [
            StadiaCodec.AUTOMATIC,
            StadiaCodec.VP9,
            StadiaCodec.H264,
        ]
    }
}