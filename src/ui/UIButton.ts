import { UIButtonContainer } from "./UIButtonContainer";
import Logger from "../Logger";

export class UIButton {
    id: string;
    html: string;
    element: Element;
    container: UIButtonContainer;
    button: HTMLElement;

    static buttonContainers: UIButtonContainer[] = [];

    constructor(icon: string, title: string, id: string) {
        this.id = id;
        this.html = `
            <div class="Pyflbb" jsname="rZHESd">
                <div class="KEaHo">
                    <span class="X5peoe" jsname="pYFhU">
                        <img class="xduoyf uibutton-icon" src="${icon}">
                    </span>
                    <span class="caSJV uibutton-title">${title}</span>
                </div>
            </div>
        `;

        this.element = document.createElement('div');
        this.element.id = id;
        this.element.classList.add('Pyf1bb', 'stadiaplus_ui-button');

        this.button = document.createElement('div');
        this.button.setAttribute('role', 'button');
        this.button.setAttribute('tabindex', '0');
        this.button.classList.add('CTvDXd', 'QAAyWd', 'Pjpac', 'zcMYd');
        this.button.innerHTML = this.html;
        this.element.appendChild(this.button);
    }

    create(callback?: Function): void {
        for(const container of UIButton.buttonContainers) {
            if(container.buttons.length < 3) {
                this.container = container;
            }
        }

        if(this.container === undefined) {
            this.container = new UIButtonContainer();
            UIButton.buttonContainers.push(this.container);
        }
        this.container.addButton(this);
        this.container.create(callback);
    }

    setIcon(icon: string) {
        this.element.querySelector('.uibutton-icon').setAttribute('src', icon);
    }

    setTitle(title: string) {
        this.element.querySelector('.uibutton-title').innerHTML = title;
    }

    update() {
        if(!this.exists()) {
            this.create();
        }
    }

    exists(): boolean {
        return document.getElementById(this.id) !== null;
    } 

    destroy() {
        this.element.remove();
        this.container.removeButton(this);
    }

    onPressed(func: (event: Event) => any) {
        this.button.addEventListener('click', func);
        this.button.addEventListener('keyup', (event: KeyboardEvent) => {
            if(event.keyCode === 13) {
                this.button.click();
            }
        })
    }
}
