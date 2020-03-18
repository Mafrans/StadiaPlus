import { UIComponent } from "./UIComponent";

export class UIRow {
    title: string;
    content: string;
    id: string;
    callback: Function;
    element: Element;

    constructor(title: string, content: string, id: string, callback: Function) {
        this.title = title;
        this.content = content;
        this.callback = callback;
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

    append(component: UIComponent, useHr: boolean = false) {
        if(useHr) {
            component.element.appendChild(document.createElement('hr'));
        }
        
        component.element.appendChild(this.element);
        this.callback(this.element);
    }
}