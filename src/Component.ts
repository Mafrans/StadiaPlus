import Logger from "./Logger";

export class Component {
    name: string = 'MyComponent';
    id: string;
    enabled: boolean;
    observeTarget: Element;
    exists: boolean;

    load(): void {
        this.id =
            this.name.toLowerCase() + '-' + Math.floor(Math.random() * 999999);

        this.exists = document.getElementById(this.id) !== null;
        this.onStart();
    }

    unload(): void {
        this.onStop();
    }

    onStart(): void {}
    onStop(): void {}
    onUpdate(): void {}
}
