export class UIComponent {
    id: string;
    html: string;
    element: Element | null;
    open = false;
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
        const container = document.querySelector('.hxhAyf');
        if (container === null || this.element === null) return;

        this.element.innerHTML = this.html;
        container.appendChild(this.element);

        // ReQuery element since outerHTML breaks it.
        this.element = document.getElementById(this.id);

        const backBtn = document.querySelector(
            `#${this.id} > header > .rkvT7c`,
        );

        if (backBtn !== null) {
            backBtn.addEventListener('click', () => {
                this.closeTab();
            });
        }
    }

    openTab(): void {
        if (this.element === null) return;

        this.element.classList.add('open');
        this.open = true;

        this.openListeners.forEach((c) => c());
    }

    closeTab(): void {
        if (this.element === null) return;

        this.element.classList.remove('open');
        this.open = false;

        this.closeListeners.forEach((c) => c());
    }

    onOpen(callback?:() => void): void {
        if (callback) { this.openListeners.push(callback); }
    }

    onClose(callback?:() => void): void {
        if (callback) { this.closeListeners.push(callback); }
    }
}
