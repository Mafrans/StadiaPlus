class ElGen {
    element: HTMLElement;

    constructor(element: string | HTMLElement) {
        if(element instanceof HTMLElement) {
            this.element = element;
        }
        else {
            this.element = document.createElement(element);
        }
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

    child(child: HTMLElement | ElGen): ElGen {
        if(child instanceof HTMLElement) {
            this.element.appendChild((child as HTMLElement));
        }
        else {
            this.element.appendChild((child as ElGen).element);
        }
        return this;
    }
    
    attr(attribute: {[name: string]: string}): ElGen {
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
}

function $el(tag: string) {
    return new ElGen(tag);
}

function $sel(selector: string) {
    return new ElGen(document.querySelector(selector) as HTMLElement);
}

export { $el, $sel };