import { triggerPageChangeEvent } from './events/PageChangeEvent';

export type StadiaPage = null | 'home' | 'player';

let pathName = '';
let page: StadiaPage = null;

export const pages: { [key: string]: RegExp } = {
    'home': /home/,
    'player': /player\/[a-z0-9]{36}.+/
}

export function updatePage() {
    console.log('updatePage');

    let newPathname = location.pathname;
    if(pathName === newPathname) return page;
    pathName = newPathname;

    const keys = Object.keys(pages);
    const newPage = keys.find(key => {
        const matcher = pages[key];
        matcher.test(pathName);
    }) as StadiaPage;

    triggerPageChangeEvent({ page: newPage, lastPage: page })
    page = newPage || null;
    return page;
}

export function getCurrentPage() {
    return page;
}