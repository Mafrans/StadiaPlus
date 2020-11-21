export class ElGen {
    element: HTMLElement;

    constructor(element: string | HTMLElement) {
        if (element instanceof HTMLElement) {
            this.element = element;
        } else {
            this.element = document.createElement(element);
        }
    }

    id(id: string): ElGen {
        this.element.id = id;
        return this;
    }

    css(css: {[key: string]: string}): ElGen {
        Object.keys(css).forEach((key: string) => {
            this.element.style.setProperty(key, css[key]);
        });
        return this;
    }

    appendTo(element: Node | ElGen): void {
        if (element instanceof Node) {
            (element).appendChild(this.element);
        } else {
            (element).element.appendChild(this.element);
        }
    }

    prependTo(element: Element | ElGen): void {
        if (element instanceof Node) {
            (element).prepend(this.element);
        } else {
            (element).element.prepend(this.element);
        }
    }

    child(child: HTMLElement | ElGen): ElGen {
        if (child instanceof HTMLElement) {
            this.element.appendChild((child));
        } else {
            this.element.appendChild((child).element);
        }
        return this;
    }

    attr(attribute: {[name: string]: unknown}): ElGen {
        Object.keys(attribute).forEach((name) => {
            this.element.setAttribute(name, attribute[name] as string);
        });
        return this;
    }

    class(classes: {[name: string]: boolean}): ElGen {
        Object.keys(classes).forEach((name) => {
            this.element.classList.toggle(name, classes[name]);
        });
        return this;
    }

    text(text: string): ElGen {
        this.element.textContent = text;
        return this;
    }

    /**
     * @deprecated innerHTML is slow and should only be used if no other solution is sufficient.
     * @param html The html to add to this element.
     */
    html(html: string): ElGen {
        this.element.innerHTML = html;
        return this;
    }

    event(events: {[name: string]: (event: Event) => void}): ElGen {
        Object.keys(events).forEach((name) => {
            this.element.addEventListener(name, events[name]);
        });
        return this;
    }
}

function $el(tag: string): ElGen {
    return new ElGen(tag);
}

function $sel(selector: string): ElGen {
    return new ElGen(document.querySelector(selector) as HTMLElement);
}

export { $el, $sel };
