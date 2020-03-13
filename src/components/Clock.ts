import { Component } from '../Component';
import Logger from '../Logger';

export class Clock extends Component {
    name: string;
    id: string;
    enabled: boolean;

    constructor() {
        super();
    }

    onStart(): void {
        this.enabled = true;
        Logger.component('Component', name, 'has been enabled');
    }
    onStop(): void {}
    onMutation(event: MutationEvent): void {}
}
