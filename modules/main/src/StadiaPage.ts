
export type StadiaPage = null | 'home' | 'player';

let lastPathName = '';
let lastPage: StadiaPage = null;

export const pages: { [key: string]: RegExp } = {
    'home': /home/,
    'player': /player\/[a-z0-9]{36}.+/
}

export function getCurrentPage() {
    let pathname = location.pathname;
    if(lastPathName === pathname) return lastPage;
    lastPathName = pathname;

    const keys = Object.keys(pages);
    const page = keys.find(key => {
        const matcher = pages[key];
        matcher.test(pathname);
    }) as StadiaPage;

    lastPage = page || null;
    return lastPage;
}