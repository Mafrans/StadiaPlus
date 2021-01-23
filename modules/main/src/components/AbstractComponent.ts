import Internal from '../decorators/@Internal';
import Logger from '../Logger';
import Util from '../Util';

export default class AbstractComponent {

    public name: string;
    public renderer: HTMLElement | null = null;

    constructor(name: string) {
        this.name = name;
    }

    @Internal('onStart')
    public async __start() {
        Logger.component(`Component ${this.name} has been enabled`);
    }

    @Internal('onUpdate')
    public async __tick() {}

    public async updateRenderer() {
        await Util.updateRenderer();
        this.renderer = Util.renderer;
    }

    async onStart(): Promise<void> {}
    async onUpdate(): Promise<void> {}
}