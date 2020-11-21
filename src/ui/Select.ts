import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.min.css';
import { SelectStyle } from '../models/SelectStyle';
import { SelectOptions } from '../models/SelectOptions';
import './styles/Select.scss';
import Logger from '../Logger';

export class Select {
    slimselect: SlimSelect | undefined;
    element: Element | null;

    constructor(element: Element, options: SelectOptions) {
        this.element = element;

        options.style = options.style !== undefined ? options.style : SelectStyle.DARK;

        this.element.classList.add(
            'stadiaplus_select',
            options.style,
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
        } catch (error) {
            Logger.error(error);
        }
    }

    disable(): void {
        if (this.element == null) return;
        this.element.classList.add('disabled');
    }

    enable(): void {
        if (this.element == null) return;
        this.element.classList.remove('disabled');
    }

    get(): string | string[] {
        if (this.slimselect == null) return 'undefined';
        return this.slimselect.selected();
    }

    set(...items: unknown[]): void {
        if (this.slimselect == null) return;

        this.slimselect.setData(
            items as never[],
        );
    }

    select(item: unknown): void {
        if (this.slimselect == null) return;

        this.slimselect.setSelected(item as never);
    }

    search(query: string): void {
        if (this.slimselect == null) return;
        this.slimselect.search(query);
    }

    destroy(): void {
        if (this.element == null) return;
        if (this.slimselect !== undefined) {
            this.slimselect.destroy();
        }
        this.element.classList.remove('stadiaplus_select');
        this.element = null;
    }
}
