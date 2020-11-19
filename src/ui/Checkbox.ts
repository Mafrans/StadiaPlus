import '../../node_modules/pretty-checkbox/src/pretty-checkbox.scss';
import { CheckboxShape } from '../models/CheckboxShape';
import { CheckboxStyle } from '../models/CheckboxStyle';
import { CheckboxInstance } from '../models/CheckboxInstance';

export class Checkbox {
    private label: string;
    private shape: string = CheckboxShape.DEFAULT;
    private style: string = CheckboxStyle.DEFAULT;
    private color: string | undefined;
    private animation: string | undefined;
    private border = true;
    private icon: string | undefined;
    private disabled = false;
    private bigger: boolean | undefined;

    constructor(label: string) {
        this.label = label;
    }

    setShape(shape: string): Checkbox {
        this.shape = shape;
        return this;
    }

    setStyle(style: string): Checkbox {
        this.style = style;
        return this;
    }

    setColor(color: string): Checkbox {
        this.color = color;
        return this;
    }

    setAnimation(animation: string): Checkbox {
        this.animation = animation;
        return this;
    }

    setBorder(border: boolean): Checkbox {
        this.border = border;
        return this;
    }

    setIcon(icon: string): Checkbox {
        this.icon = icon;
        return this;
    }

    setDisabled(disabled: boolean): Checkbox {
        this.disabled = disabled;
        return this;
    }

    setBigger(bigger: boolean): Checkbox {
        this.bigger = bigger;
        return this;
    }

    build(): CheckboxInstance {
        // Create element
        const element = document.createElement('div');

        // Add main classes
        element.classList.add('pretty', 'p-default');

        // If style is not default, add style
        if (this.shape) {
            element.classList.add(this.shape);
        }

        // If style is not default, add style
        if (this.style) {
            element.classList.add(this.style);
        }

        // If animated, add animation
        if (this.animation) {
            element.classList.add(this.animation);
        }

        // Set bigger
        if (this.bigger) {
            element.classList.add('p-bigger');
        }

        // Set border
        if (!this.border) {
            element.classList.add('p-plain');
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
        if (this.color) {
            state.classList.add(this.color);
        }

        // If has icon, add icon
        if (this.icon) {
            element.classList.add('p-icon');

            const icon = document.createElement('span');
            icon.classList.add('material-icons');
            icon.innerHTML = this.icon;

            state.appendChild(icon);
        }

        // Add label
        const label = document.createElement('label');
        label.innerHTML = this.label;
        state.appendChild(label);

        element.appendChild(state);

        return { pretty: element, checkbox };
    }
}
