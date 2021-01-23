import Internal from '../decorators/@Internal';
import Logger from '../Logger';

export default class AbstractComponent {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    @Internal('Start')
    public __start() {
        Logger.component(`Component ${this.name} has been enabled`);
    }

    @Internal('Update')
    public __tick() {}

    async Start(): Promise<void> {}
    async Update(): Promise<void> {}
}