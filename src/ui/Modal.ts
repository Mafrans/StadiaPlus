import { ElGen } from '../util/ElGen';
import './styles/Modal.scss';

export class Modal {
    static instance: Modal;

    element: Element;
    wrapper: Element;
    content: Element;
    closeButton: Element;

    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_modal');

        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('stadiaplus_modal-wrapper');

        this.content = document.createElement('div');
        this.content.classList.add('stadiaplus_modal-content');

        this.closeButton = document.createElement('i');
        this.closeButton.innerHTML = 'close';
        this.closeButton.classList.add('material-icons', 'stadiaplus_modal-close');

        const self = this;
        this.closeButton.addEventListener('click', () => {
            self.element.classList.remove('active');
        });
    }

    create() {
        document.body.appendChild(this.element);
        this.element.appendChild(this.wrapper);
        this.wrapper.appendChild(this.closeButton);
        this.wrapper.appendChild(this.content);

        this.element.addEventListener('click', () => this.close());
        this.wrapper.addEventListener('click', (event) => event.stopPropagation());
    }

    close() {
        this.element.classList.remove('active');
    }

    static activate(content: string | ElGen) {
        if(content instanceof ElGen) {
            content.appendTo(this.instance.content);
        }
        else {
            this.instance.content.innerHTML = content;
        }

        this.instance.element.classList.add('active');
    }

    static close() {
        this.instance.close();
    }

    static init() {
        this.instance = new Modal();
        this.instance.create();
    }
}
