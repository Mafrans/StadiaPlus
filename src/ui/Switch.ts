import '../../node_modules/pretty-checkbox/src/pretty-checkbox.scss';
import { SwitchStyle } from '../models/SwitchStyle';

export class Switch {
    private label: string;
    private style: string = SwitchStyle.DEFAULT;
    private color?: string;
    private disabled = false;
    private bigger = false;

    constructor(label: string) {
        this.label = label;
    }

    setStyle(style: string): Switch {
        this.style = style;
        return this;
    }

    setColor(color: string): Switch {
        this.color = color;
        return this;
    }

    setDisabled(disabled: boolean): Switch {
        this.disabled = disabled;
        return this;
    }

    setBigger(bigger: boolean): Switch {
        this.bigger = bigger;
        return this;
    }

    build(): { pretty: HTMLElement, checkbox: HTMLInputElement } {
        // Create element
        const element = document.createElement('div');

        // Add main classes
        element.classList.add('pretty', 'p-switch');

        // If style is not default, add style
        if (this.style !== undefined) {
            element.classList.add(this.style);
        }

        // Set bigger
        if (this.bigger) {
            element.classList.add('p-bigger');
        }

        // Add checkbox input
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.disabled = this.disabled;
        element.appendChild(checkbox);

        // Add state div
        const state = document.createElement('div');
        state.classList.add('state');

        // If colored, add color
        if (this.color !== undefined) {
            state.classList.add(this.color);
        }

        // Add label
        const label = document.createElement('label');
        label.innerHTML = this.label;
        state.appendChild(label);

        element.appendChild(state);

        return { pretty: element, checkbox };
    }
}
