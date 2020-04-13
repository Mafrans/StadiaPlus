import '../../node_modules/pretty-checkbox/src/pretty-checkbox.scss';

export class Switch {
    private label: string;
    private style: string = SwitchStyle.DEFAULT;
    private color: string;
    private disabled: boolean;
    private bigger: boolean;

    constructor(label: string) {
        this.label = label;
    }
    
    setStyle(style: string) {
        this.style = style;
        return this;
    }
    
    setColor(color: string) {
        this.color = color;
        return this;
    }

    setDisabled(disabled: boolean) {
        this.disabled = disabled;
        return this;
    }

    setBigger(bigger: boolean) {
        this.bigger = bigger;
        return this;
    }

    build() {
        // Create element
        const element = document.createElement('div');

        // Add main classes
        element.classList.add('pretty', 'p-switch');

        // If style is not default, add style
        if(this.style) {
            element.classList.add(this.style);
        }

        // Set bigger
        if(this.bigger) {
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
        if(this.color) {
            state.classList.add(this.color);
        }

        // Add label
        const label = document.createElement('label');
        label.innerHTML = this.label;
        state.appendChild(label);

        element.appendChild(state);

        return {pretty: element, checkbox: checkbox};
    }
}

export class SwitchStyle {
    public static DEFAULT: string = null;
    public static FILL: string = 'p-fill';
    public static SLIM: string = 'p-slim';
}