export class Component {
    name:string = 'MyComponent';
    id:string;
    enabled:boolean;

    constructor() {
        this.id = this.name.toLowerCase() + "-" + Math.floor(Math.random() * 999999);
    }

    onStart():void {};
    onStop():void {};
    onMutation():void {};
}