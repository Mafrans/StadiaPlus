import { UIButton } from './UIButton';

export class UIButtonContainer {
    buttons: UIButton[] = [];
    container: Element | null;
    element: Element;
    id: string;
    wrapper: Element;

    constructor() {
        this.id = `button-container-${Math.floor(Math.random() * 9999)}`;
        this.container = document.querySelector('.TZ0BN');

        this.wrapper = document.createElement('div');
        this.wrapper.id = this.id;
        this.wrapper.classList.add('ZgUMo', 'stadiaplus_ui-btn-wrapper');

        this.element = document.createElement('div');
        this.element.classList.add('E0Zk9b', 'stadiaplus_ui-btn-container');
    }

    exists(): boolean {
        return document.getElementById(this.id) !== null;
    }

    create(callback?: () => void): void {
        if (!this.exists()) {
            this.container = document.querySelector('.TZ0BN'); // Requery in case the container was deleted
            this.wrapper.appendChild(this.element);

            if (this.container !== null) {
                this.container.appendChild(this.wrapper);
            }
        }

        this.buttons.forEach((button) => {
            if (!button.exists()) {
                this.element.appendChild(button.element);
            }
        });

        if (callback) { callback(); }
    }

    addButton(button: UIButton): void {
        if (this.buttons.indexOf(button) === -1) {
            this.buttons.push(button);
        }
    }

    removeButton(button: UIButton): void {
        this.buttons = this.buttons.filter((b) => b.id !== button.id);
    }
}
