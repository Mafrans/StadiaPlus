import { StadiaPage } from '../StadiaPage';

type PageChangeEvent = {
    page: StadiaPage,
    lastPage: StadiaPage
}

const listeners: ((event: PageChangeEvent) => void)[] = [];

export function onPageChange(listener: (event: PageChangeEvent) => void) {
    listeners.push(listener);
}