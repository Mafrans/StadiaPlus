import { UIButtonContainer } from './UIButtonContainer';

export class UIButton {
    id: string;
    html: string;
    element: Element;
    container?: UIButtonContainer;
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

    create(callback?: () => void): void {
        UIButton.buttonContainers.forEach((container) => {
            if (container.buttons.length < 3) {
                this.container = container;
            }
        });

        if (this.container === undefined) {
            this.container = new UIButtonContainer();
            UIButton.buttonContainers.push(this.container);
        }
        this.container.addButton(this);
        this.container.create(callback);
    }

    setIcon(icon: string): void {
        const iconElement = this.element.querySelector('.uibutton-icon');
        if (iconElement !== null) {
            iconElement.setAttribute('src', icon);
        }
    }

    setTitle(title: string): void {
        const titleElement = this.element.querySelector('.uibutton-title');
        if (titleElement !== null) {
            titleElement.textContent = title;
        }
    }

    update(): void {
        if (!this.exists()) {
            this.create();
        }
    }

    exists(): boolean {
        return document.getElementById(this.id) !== null;
    }

    destroy(): void {
        this.element.remove();
        if (this.container !== undefined) {
            this.container.removeButton(this);
        }
    }

    onPressed(func: (event: Event) => void): void {
        this.button.addEventListener('click', func);
        this.button.addEventListener('keyup', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                this.button.click();
            }
        });
    }
}
