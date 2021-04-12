import { StadiaPage } from '../StadiaPage';

type PageChangeEvent = {
    page: StadiaPage,
    lastPage: StadiaPage
}

const listeners: ((event: PageChangeEvent) => void)[] = [];
export function onPageChanged(listener: (event: PageChangeEvent) => void) {
    listeners.push(listener);
}

export function triggerPageChangeEvent(event: PageChangeEvent) {
    listeners.forEach(f => f(event));
}