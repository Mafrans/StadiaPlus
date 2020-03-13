export interface Component {
    name:string;
    id:string;
    enabled:boolean;

    onStart():void;
    onStop():void;
    onMutation():void;
}