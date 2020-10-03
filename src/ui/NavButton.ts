import { $el, ElGen } from '../util/ElGen';
import './styles/Button.scss'

export class NavButton {
    private id: string;
    public icon: string;
    public text: string;
    public element: ElGen;
    private active: boolean;
    private position: NavPosition;

    constructor(icon?: string, text?: string, position?: NavPosition) {
        this.icon = icon;
        this.text = text;
        this.position = position;
        this.id = 'stadiaplus_' + Math.floor(Math.random() * 999999);

        this.element = $el('div').id(this.id).class({ stadiaplus_navbutton: true });

        if (this.icon != null) {
            this.element.child(
                $el('i')
                    .class({ 'material-icons-extended': true })
                    .text(icon)
            );
        }

        if (this.text != null) {
            this.element.child($el('span').text(text));
        }
    }

    setActive(value: boolean) {
        this.active = value;
        this.element.class({'active': value});
    }

    getActive(): boolean {
        return this.active;
    }

    onClick(event: (event: any) => void) {
        this.element.event({ click: event });
    }

    create() {
        const navbar = document.querySelector('.zM6lsb');
        console.log('nav');
        if(navbar.querySelector('#' + this.id) != null) return;
        console.log('creating button');


        switch(this.position) {
            case NavPosition.LEFT:
                this.element.appendTo(document.querySelector('.YNlByb'));
                break;
            case NavPosition.RIGHT:
                this.element.prependTo(document.querySelector('.WpnpPe'));
        }
    }

    destroy() {
        this.element.element.remove();
    }
}

export enum NavPosition {
    LEFT,
    RIGHT
}