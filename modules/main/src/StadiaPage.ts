export default class StadiaPage {

    static HOME: StadiaPage = new StadiaPage('home');



    private static lastPathName: string = '';
    private static lastPage: StadiaPage | null = null;

    path: string;
    constructor(path: string) {
        this.path = path;
    }

    static values(): StadiaPage[] {
        return [
            StadiaPage.HOME
        ];
    }

    static current(): StadiaPage | null {
        let pathname = location.pathname;
        if(this.lastPathName === pathname) return null;
        this.lastPathName = pathname;

        const page = this.values().find(page => pathname === `/${page.path}` || pathname === `/${page.path}/`);
        this.lastPage = page !== undefined ? page : null;

        return this.lastPage;
    }
}