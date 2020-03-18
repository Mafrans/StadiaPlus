import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.min.css';
import '../ui/styles/Select.scss'

export class Select {
    slimselect: SlimSelect;
    element: Element;

    constructor(element: Element) {
        this.element = element;

        this.element.classList.add('stadiaplus_dropdown');
        this.slimselect = new SlimSelect({
            select: this.element,
            showSearch: false
        });
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
}