import '~pretty-checkbox/src/pretty-checkbox.scss';

export class Checkbox {
    private label: string;
    private shape: string = CheckboxShape.DEFAULT;
    private style: string = CheckboxStyle.DEFAULT;
    private color: string;
    private animation: string;
    private border: boolean = true;
    private icon: string;
    private disabled: boolean;
    private bigger: boolean;

    constructor(label: string) {
        this.label = label;
    }

    setShape(shape: string) {
        this.shape = shape;
        return this;
    }
    
    setStyle(style: string) {
        this.style = style;
        return this;
    }
    
    setColor(color: string) {
        this.color = color;
        return this;
    }
    
    setAnimation(animation: string) {
        this.animation = animation;
        return this;
    }
    
    setBorder(border: boolean) {
        this.border = border;
        return this;
    }
    
    setIcon(icon: string) {
        this.icon = icon;
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
        element.classList.add('pretty', this.shape, this.style);

        // If animated, add animation
        if(this.animation) {
            element.classList.add(this.animation);
        }

        // Set bigger
        if(this.bigger) {
            element.classList.add('p-bigger');
        }

        // Set border
        if(!this.border) {
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
        if(this.color) {
            state.classList.add(this.color);
        }

        // If has icon, add icon
        if(this.icon) {
            element.classList.add('p-icon');

            const icon = document.createElement('span');
            icon.classList.add('material-icons-extended');
            icon.innerHTML = this.icon;

            state.appendChild(icon);
        }

        // Add label
        const label = document.createElement('label');
        label.innerHTML = this.label;
        state.appendChild(label);

        element.appendChild(state);

        return {element, checkbox};
    }
}

export class CheckboxShape {
    public static DEFAULT: string = 'p-default';
    public static CURVED: string = 'p-curved';
    public static ROUND: string = 'p-round';
}

export class CheckboxStyle {
    public static DEFAULT: string = '';
    public static FILL: string = 'p-fill';
    public static THICK: string = 'p-thick';
}

export class CheckboxColor {
    public static BLUE: string = 'p-primary';
    public static GREEN: string = 'p-success';
    public static YELLOW: string = 'p-warning';
    public static CYAN: string = 'p-info';
    public static RED: string = 'p-danger';
}

export class CheckboxAnimation {
    public static SMOOTH: string = 'p-smooth';
    public static JELLY: string = 'p-jelly';
    public static TADA: string = 'p-tada';
    public static ROTATE: string = 'p-rotate';
    public static PULSE: string = 'p-pulse';
}