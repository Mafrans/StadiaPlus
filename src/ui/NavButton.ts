import Logger from '../Logger';
import { $el, ElGen } from '../util/ElGen';
import { NavPosition } from '../models/NavPosition';
import './styles/Button.scss';

export class NavButton {
    private id: string;
    public icon: string | undefined;
    public text: string | undefined;
    public element: ElGen;
    private active = false;
    private position: NavPosition = NavPosition.LEFT;

    constructor(icon?: string, text?: string, position?: NavPosition) {
        this.icon = icon;
        this.text = text;
        if (position != null) {
            this.position = position;
        }

        this.id = `stadiaplus_${Math.floor(Math.random() * 999999)}`;

        this.element = $el('div').id(this.id).class({ stadiaplus_navbutton: true });

        if (this.icon != null) {
            this.element.child(
                $el('i')
                    .class({ 'material-icons-extended': true })
                    .text(this.icon),
            );
        }

        if (this.text != null) {
            this.element.child($el('span').text(this.text));
        }
    }

    setActive(value: boolean): void {
        this.active = value;
        this.element.class({ active: value });
    }

    getActive(): boolean {
        return this.active;
    }

    onClick(event: (_event: Event) => void): void {
        this.element.event({ click: event });
    }

    create(): void {
        const navbar = document.querySelector('.zM6lsb');
        if (navbar === null) {
            Logger.error('The navbar was not found, please report this to the developer of Stadia+');
            return;
        }

        if (navbar.querySelector(`#${this.id}`) != null) return;

        switch (this.position) {
            case NavPosition.LEFT:
                this.element
                    .css({ 'margin-left': '1rem' })
                    .appendTo(document.querySelector('.YNlByb') as Node);
                break;
            case NavPosition.RIGHT:
                this.element
                    .css({ 'margin-right': '1rem' })
                    .prependTo(document.querySelector('.WpnpPe') as Element);
                break;
            default: break;
        }
    }

    destroy(): void {
        this.element.element.remove();
    }
}
