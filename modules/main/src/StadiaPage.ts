import { triggerPageChangeEvent } from './events/PageChangeEvent';
import Logger from './Logger';
import Util from './Util';

export type StadiaPage = null | 'home' | 'player' | 'library';

let pathName = '';
let page: StadiaPage = null;

export const pages: { [key: string]: RegExp } = {
    'home': /\/home/,
    'player': /\/player\/[a-z0-9]{36}/,
    'library': /\/library/
}

export function navigate(target: string) {
    postMessage({source: 'StadiaPlusNavigator', target}, '*');
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
        let first = true;
        let i = 0;
        stadia[navigatorKey].prototype.navigate = function(...args: any[]) {
            // For some reason, this function fires twice every time it navigates anywhere.
            // Therefore, we must cancel every other fire.
            i++;
            if (i % 2) return;

            const navigate = oldNavigate.bind(this);
            // This hack is pretty wild, but essentially allows for navigation programmatically through a message event listener.
            if (first) {
                addEventListener('message', function(event: MessageEvent) {
                    if (event.data.source === "StadiaPlusNavigator") {
                        navigate(event.data.target);
                    }
                });
                first = false;
            }
            else {
                navigate(...args);
            }
        }
    })(stadia[navigatorKey].prototype.navigate);

    const button = document.querySelector('a[href="/home"]');
    console.log({ button })
    if (button && button instanceof HTMLElement) {
        button.click();
    }
}

export function updatePage() {
    let newPathname = location.pathname;
    if(pathName === newPathname) return page;
    pathName = newPathname;

    const keys = Object.keys(pages);
    const newPage = keys.find(key => {
        const matcher = pages[key];
        return matcher.test(pathName);
    }) as StadiaPage;

    console.log('updatePage', newPathname, newPage);

    triggerPageChangeEvent({ page: newPage, lastPage: page })
    page = newPage || null;
    return page;
}

export function getCurrentPage() {
    return page;
}