import { triggerPageChangeEvent } from './events/PageChangeEvent';
import Logger from './Logger';
import Util from './Util';

export type StadiaPage = null | 'home' | 'player' | 'library';

let pathName = '';
let page: StadiaPage = null;

export const pages: { [key: string]: RegExp } = {
    'home': /\/home/,
    'store': /\/store/,
    'player': /\/player\/[a-z0-9]{36}/,
    'library': /\/library/
}

export function navigate(target: string) {
    postMessage({source: 'StadiaPlusNavigator', type: 'navigate', value: target}, '*');
}

// Scuffed but working hook that acts as an event handler for navigation, as well as
// including a hack allowing custom navigation programmatically.
export function createNavigationHook(timeout?: number) {
    const stadia: any = (window as any).default_CloudcastPortalFeWebUi;
    const navigatorKey = Object.keys(stadia).find(k => {
        let v = stadia[k];
        return v && v.prototype && Object.keys(v.prototype).indexOf("navigate") !== -1
    });

    // If no navigator is found, try again
    if(!navigatorKey) {
        if (timeout && timeout <= 0) {
            // The timeout was reached, cancel and send an error
            console.error("FATAL ERROR: No Stadia navigator found, therefore cannot start navigation service.");
            return;
        }

        setTimeout(() => createNavigationHook((timeout || 10) - 1), 500);
        return;
    }

    ((oldNavigate) => {
        let i = 0;
        stadia[navigatorKey].prototype.navigate = function(...args: any[]) {
            // For some reason, this function fires twice every time it navigates anywhere.
            // Therefore, we must cancel every other fire.
            i++;
            if (i % 2) return;

            const navigate = oldNavigate.bind(this);
            // This hack is pretty wild, but essentially allows for navigation programmatically through a message event listener.
            if (i <= 2) {
                console.log('create event');
                addEventListener('message', function(event: MessageEvent) {
                    const {source, type, value} = event.data;
                    if (source === "StadiaPlusNavigator" && type === 'navigate') {
                        navigate(value);
                        postMessage({ source: 'StadiaPlusNavigator', type: 'event', value: args[0] }, '*');
                    }
                });
            }
            else {
                navigate(...args);
                postMessage({ source: 'StadiaPlusNavigator', type: 'event', value: args[0] }, '*');
            }
        }
    })(stadia[navigatorKey].prototype.navigate);

    const button = document.querySelector('a[href="/home"]');
    console.log({ button })
    if (button && button instanceof HTMLElement) {
        button.click();
    }
}

export function startPageUpdateHandler() {
    addEventListener('message', event => {
        const {source, type, value} = event.data;
        console.log({source, type, value});
        if (source === 'StadiaPlusNavigator' && type === 'event') {
            setPage(findPage(value));
        }
    })
}

export function findPage(pathName: string): StadiaPage {
    return Object.keys(pages).find(key => {
        const matcher = pages[key];
        return matcher.test(pathName);
    }) as StadiaPage;
}

export function setPage(newPage: StadiaPage) {
    console.log({page, newPage});
    if(newPage === page) return;

    console.log('updatePage', page, newPage);
    triggerPageChangeEvent({ page: newPage, lastPage: page })
    page = newPage || null;
    return page;
}

export function getCurrentPage() {
    return page;
}