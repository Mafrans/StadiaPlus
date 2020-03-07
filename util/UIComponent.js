/* eslint-disable no-unused-vars */

function UIComponent(title, content) {
    this.id = `btn-${Math.floor(Math.random() * 1000000)}`;
    this.html = `
        <div class="stadiaplus_ui-component" id="${this.id}">
            <header>
                <div class="rkvT7c" jsaction="click:a4fUwd" jsname="GeGHKb">
                    <span class="DPvwYc tRqc3c" aria-hidden="true">arrow_back</span>
                </div>
                <span class="Q3wyyb">
                    <div class="CwCxFd">${title}</div>
                </span>
            </header>

            <div class="content">
                ${content}
            </div>
        </div>
    `;

    this.create = function () {
        this.element = document.createElement('div');

        // Has to ReQuery as it breaks sometimes.
        const container = document.querySelector('.hxhAyf.fi8Jxd');
        container.appendChild(this.element);

        console.log(this.container);
        this.element.outerHTML = this.html;

        // ReQuery element since outerHTML breaks it.
        this.element = document.getElementById(this.id);

        const backBtn = document.querySelector('.stadiaplus_ui-component > header > .rkvT7c');
        const self = this;
        backBtn.addEventListener('click', () => { self.close(); });
    };

    this.open = function () {
        if (!document.getElementById(this.id)) {
            this.create();
        }
        console.log(this.element);
        this.element.classList.add('open');
    };

    this.close = function (element) {
        if (!document.getElementById(this.id)) {
            return;
        }
        this.element.classList.remove('open');
    };
}

function createButtonContainer() {
    const existing = document.querySelector('.ZgUMo.stadiaplus_ui-btn-container');
    if (existing) {
        return existing;
    }

    const wrapper = document.querySelector('.TZ0BN');
    const container = document.createElement('div');
    wrapper.appendChild(container);
    container.outerHTML = `
        <div class="ZgUMo stadiaplus_ui-btn-container">
            <div class="E0Zk9b">
            </div>
        </div>
    `;

    return document.querySelector('.stadiaplus_ui-btn-container > .E0Zk9b');
}

function UIButton(icon, title) {
    this.container = createButtonContainer();
    this.id = `btn-${Math.floor(Math.random() * 1000000)}`;
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

    this.create = function (callback) {
        this.element = document.createElement('div');

        if (!document.querySelector('.stadiaplus_ui-btn-container > .E0Zk9b')) {
            this.container = createButtonContainer();
        }

        if (document.getElementById(this.id)) {
            return;
        }

        this.buttonElement = document.createElement('div');
        this.buttonElement.setAttribute('role', 'button');
        this.buttonElement.setAttribute('tabindex', '0');
        this.buttonElement.classList.add('CTvDXd', 'QAAyWd', 'Pjpac', 'zcMYd')
        this.buttonElement.innerHTML = this.html;
        this.element.appendChild(this.buttonElement);
        this.container.appendChild(this.element);
        this.element.classList.add('stadiaplus_ui-button');

        callback();
    };
}
