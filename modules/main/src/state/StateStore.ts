import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { StadiaPage } from '../StadiaPage';

export default class StateStore {
    page: StadiaPage = null
    lastPage: StadiaPage = null
    authToken: string | null = null
    renderer: HTMLElement | null = null

    constructor() {
        makeAutoObservable(this);
    }

    setPage(value: StadiaPage) {
        this.lastPage = this.page;
        this.page = value;
    }

    setAuthToken(value: string) {
        this.authToken = value;
    }

    setRenderer(value: HTMLElement) {
        this.renderer = value;
    }
}

export const stateStore = new StateStore();