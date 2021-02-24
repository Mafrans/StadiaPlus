export default class StadiaPage {

    static HOME: StadiaPage = new StadiaPage('home');
    static PLAYER: StadiaPage = new StadiaPage('player', true);



    private static lastPathName: string = '';
    private static lastPage: StadiaPage | null = null;

    path: string;
    isPrefix: boolean = false;
    constructor(path: string, isPrefix?: boolean) {
        this.path = path;

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
            if (page.isPrefix) {
                return pathname.startsWith(`/${page.path}`);
            }

            return pathname === `/${page.path}` || pathname === `/${page.path}/`;
        });
        this.lastPage = page || null;

        return this.lastPage;
    }
}