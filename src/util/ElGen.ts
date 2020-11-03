export class ElGen {
    element: HTMLElement;

    constructor(element: string | HTMLElement) {
        if(element instanceof HTMLElement) {
            this.element = element;
        }
        else {
            this.element = document.createElement(element);
        }
    }

    id(id: string): ElGen {
        this.element.id = id;
        return this;
    }

    css(css: {[key: string]: string}): ElGen {
        for(const key in css) {
            this.element.style[key as any] = css[key];
        }
        return this;
    }

    appendTo(element: Node | ElGen) {
        if(element instanceof Node) {
            (element as Node).appendChild(this.element);
        }
        else {
            (element as ElGen).element.appendChild(this.element);
        }
    }

    prependTo(element: Element | ElGen) {
        if(element instanceof Node) {
            (element as Element).prepend(this.element);
        }
        else {
            (element as ElGen).element.prepend(this.element);
        }
    }

    child(child: HTMLElement | ElGen): ElGen {
        if(child instanceof HTMLElement) {
            this.element.appendChild((child as HTMLElement));
        }
        else {
            this.element.appendChild((child as ElGen).element);
        }
        return this;
    }
    
    attr(attribute: {[name: string]: any}): ElGen {
        for(const name in attribute) {
            this.element.setAttribute(name, attribute[name]);
        }
        return this;
    }

    class(classes: {[name: string]: boolean}): ElGen {
        for(const name in classes) {
            this.element.classList.toggle(name, classes[name]);
        }
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

    event(events: {[name: string]: (event: Event) => void}) {
        for(const name in events) {
            this.element.addEventListener(name, events[name]);
        }
        return this;
    }
}

function $el(tag: string) {
    return new ElGen(tag);
}

function $sel(selector: string) {
    return new ElGen(document.querySelector(selector) as HTMLElement);
}

export { $el, $sel };