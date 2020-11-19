import { UIComponent } from './UIComponent';
import { UIRowOptions } from '../models/UIRowOptions';

export class UIRow {
    title: string;
    content: string;
    id: string;
    options: UIRowOptions = {};
    element: Element;

    constructor(title: string, content: string, id: string, options?: UIRowOptions) {
        this.title = title;
        this.content = content;
        if (options !== undefined) {
            this.options = options;
        }
        this.id = id;

        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.innerHTML = `
            <p>${this.title}</p>
            <div>
                ${this.content}
            </div>
        `;
        this.element.classList.add('stadiaplus_ui-row');
    }

    exists(): HTMLElement | null {
        return document.getElementById(this.id);
    }

    destroy(): void {
        if (this.options.onDestroy !== undefined) {
            this.options.onDestroy(this);
        }

        this.element.remove();
    }

    reload(): void {
        if (this.options.onReload !== undefined) {
            this.options.onReload(this);
        }
    }

    append(component: UIComponent, useHr = false): void {
        if (useHr) {
            component.element.appendChild(document.createElement('hr'));
        }

        component.element.appendChild(this.element);

        if (this.options.onCreate !== undefined) {
            this.options.onCreate(this);
        }
    }
}
