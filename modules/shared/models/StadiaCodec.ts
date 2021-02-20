export default class StadiaCodec {
    public static AUTOMATIC = null;
    public static VP9 = new StadiaCodec('VP9');
    public static H264 = new StadiaCodec('H264');

    name: string;
    constructor(name: string) {
        this.name = name;
    }
}