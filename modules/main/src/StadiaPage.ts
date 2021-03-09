export default class StadiaPage {

    static HOME: StadiaPage = new StadiaPage(/home/);
    static PLAYER: StadiaPage = new StadiaPage(/player\/[a-z0-9]{36}/, true);



    private static lastPathName: string = '';
    private static lastPage: StadiaPage | null = null;

    matcher: RegExp;
    isPrefix: boolean = false;
    constructor(matcher: RegExp, isPrefix?: boolean) {
        this.matcher = matcher;

        if(isPrefix !== undefined) {
            this.isPrefix = isPrefix;
        }
    }

    static values(): StadiaPage[] {
        return [
            StadiaPage.HOME,
            StadiaPage.PLAYER,
        ];
    }

    static current(): StadiaPage | null {
        let pathname = location.pathname;
        if(this.lastPathName === pathname) return this.lastPage;
        this.lastPathName = pathname;

        const page = this.values().find(page => {
            return page.matcher.test(pathname);
        });
        this.lastPage = page || null;
        
        return this.lastPage;
    }
}