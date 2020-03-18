export class UIButton {
    id: string;
    html: string;
    element: Element;
    container: Element;
    button: Element;

    constructor(icon: string, title: string, id: string) {
        this.id = id;
        this.html = `
            <div class="Pyflbb" jsname="rZHESd">
                <div class="KEaHo">
                    <span class="X5peoe" jsname="pYFhU">
                        <img class="xduoyf" src="${icon}">
                    </span>
                    <span class="caSJV">${title}</span>
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
    }

    create(callback?: Function): void {
        this.container = UIButton.createButtonContainer(
            this.id + '-button-container',
        );

        this.element.appendChild(this.button);
        this.container.appendChild(this.element);

        if (callback) callback();
    }

    static createButtonContainer(id: string) {
        const existing = document.getElementById(id);
        if (existing) {
            return existing;
        }

        const wrapper = document.querySelector('.TZ0BN');
        const container = document.createElement('div');
        container.classList.add('ZgUMo', 'stadiaplus_ui-btn-container');
        wrapper.appendChild(container);
        container.innerHTML = `
            <div class="E0Zk9b"></div>
        `;

        return container.querySelector('.E0Zk9b');
    }
}
