import { Component } from '../Component';

export class Clock extends Component {
    name: string;    
    id: string;
    enabled: boolean;
    
    constructor() {
        super();
    }

    onStart(): void {}
    onStop(): void {}
    onMutation(): void {}
}