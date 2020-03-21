import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.min.css';
import '../ui/styles/Select.scss'

export class Select {
    slimselect: SlimSelect;
    element: Element;

    constructor(element: Element, placeholder?: any) {
        this.element = element;

        this.element.classList.add('stadiaplus_dropdown');

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
                placeholder: placeholder
            });
        }
        catch(error) {} 
    }

    get() {
        return this.slimselect.selected();
    }

    set(...items: any[]) {
        if(items.length === 1) {
            // Just in case slimselect.set is faster
            this.slimselect.set(items[0]);
        }
        else {
            this.slimselect.setData(items);
        }
    }

    search(query: string) {
        return this.slimselect.search(query);
    }

    destroy() {
        if(this.slimselect.config !== undefined) {
            this.slimselect.destroy();
        }
        this.element.classList.remove('stadiaplus_dropdown');
        this.element = null;
    }
}