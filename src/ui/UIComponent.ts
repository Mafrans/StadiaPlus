import Logger from '../Logger';

export class UIComponent {
    id: string;
    html: string;
    element: Element;
    open: boolean;
    openListeners: (() => void)[] = [];
    closeListeners: (() => void)[] = [];

    constructor(title: string, content: string, id: string) {
        this.id = id;
        this.html = `
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
        `;

        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.classList.add('stadiaplus_ui-component');
    }

    create(): void {
        const container = document.querySelector('.hxhAyf.fi8Jxd');
        if(!container) return;

        this.element.innerHTML = this.html;
        container.appendChild(this.element);

        // ReQuery element since outerHTML breaks it.
        this.element = document.getElementById(this.id);

        const backBtn = document.querySelector(
            `#${this.id} > header > .rkvT7c`,
        );
        const self = this;
        backBtn.addEventListener('click', () => {
            self.closeTab();
        });
    }

    openTab(): void {
        this.element.classList.add('open');
        this.open = true;

        this.openListeners.forEach(c => c());
    }

    closeTab(): void {
        Logger.info('Closing', this.id);
        this.element.classList.remove('open');
        this.open = false;

        this.closeListeners.forEach(c => c());
    }

    onOpen(callback?:() => void) {
        if(callback)
            this.openListeners.push(callback)
    }

    onClose(callback?:() => void) {
        if(callback)
            this.closeListeners.push(callback)
    }
}