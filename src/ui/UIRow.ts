import { UIComponent } from "./UIComponent";

export class UIRow {
    title: string;
    content: string;
    id: string;
    options: UIRowOptions;
    element: Element;

    constructor(title: string, content: string, id: string, options?: UIRowOptions) {
        this.title = title;
        this.content = content;
        this.options = options;
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

    exists() {
        return document.getElementById(this.id);
    }

    destroy() {
        this.options.onDestroy(this);
        this.element.remove();
    }

    reload() {
        this.options.onReload(this);
    }

    append(component: UIComponent, useHr: boolean = false) {
        if(useHr) {
            component.element.appendChild(document.createElement('hr'));
        }
        
        component.element.appendChild(this.element);
        this.options.onCreate(this);
    }
}

export class UIRowOptions {
    onCreate?: Function;
    onDestroy?: Function;
    onReload?: Function;
}