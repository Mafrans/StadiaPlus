export default class StadiaResolution {
    public static FULL_HD = new StadiaResolution('FHD');
    public static QHD = new StadiaResolution('QHD');
    public static ULTRA_HD = new StadiaResolution('4K');

    name: string;
    constructor(name: string) {
        this.name = name;
    }

    static values(): StadiaResolution[] {
        return [
            StadiaResolution.FULL_HD,
            StadiaResolution.QHD,
            StadiaResolution.ULTRA_HD,
        ]
    }
}