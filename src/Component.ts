import Logger from "./Logger";

export class Component {
    name: string = 'MyComponent';
    id: string;
    enabled: boolean;

    load(): void {
        this.id =
            this.name.toLowerCase() + '-' + Math.floor(Math.random() * 999999);

        this.onStart();
    }

    exists(): boolean {
        return document.querySelector('#' + this.id) !== null;
    }

    unload(): void {
        this.onStop();
    }

    onStart(): void {}
    onStop(): void {}
    onUpdate(): void {}
}
