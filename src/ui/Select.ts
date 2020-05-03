import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.min.css';
import '../ui/styles/Select.scss';

export class Select {
    slimselect: SlimSelect;
    element: Element;

    constructor(element: Element, options: SelectOptions) {
        this.element = element;

        options.style = options.style !== undefined ? options.style : SelectStyle.DARK;
        options.onChange = options.onChange !== undefined ? options.onChange : () => {};
        options.beforeChange = options.beforeChange !== undefined ? options.beforeChange : () => {};

        this.element.classList.add(
            'stadiaplus_dropdown',
            options.style
        );

        /**
         * Slimselect throws a TypeError if the elements/containers
         * have been deleted without properly being destroyed. As Stadia
         * runs in a virtual DOM, we have no control of when the DOM changes
         * therefore we can't solve it in a proper way.
         *
         * Let's just hope garbage collection takes care of it.
         */
        try {
            this.slimselect = new SlimSelect({
                select: this.element,
                showSearch: false,
                placeholder: options.placeholder,
                onChange: options.onChange,
                beforeOnChange: options.beforeChange,
            });
        } catch (error) {}
    }

    disable() {
        this.element.classList.add('disabled');
    }
    
    enable() {
        this.element.classList.remove('disabled');
    }

    get() {
        return this.slimselect.selected();
    }

    set(...items: any[]) {
        if (items.length === 1) {
            // Just in case slimselect.set is faster
            this.slimselect.set(items[0]);
        } else {
            this.slimselect.setData(items);
        }
    }

    search(query: string) {
        return this.slimselect.search(query);
    }

    destroy() {
        if (this.slimselect !== undefined) {
            this.slimselect.destroy();
        }
        this.element.classList.remove('stadiaplus_dropdown');
        this.element = null;
    }
}

export class SelectStyle {
    public static SLIMSELECT: string = null;
    public static SLIMSELECT_LARGE: string = 'style-slimselect-large';
    public static LIGHT: string = 'style-light';
    public static DARK: string = 'style-dark';
}

interface SelectOptions {
    placeholder?: any;
    style?: string;
    onChange?: (info: any) => any;
    beforeChange?: (info: any) => any;
}
