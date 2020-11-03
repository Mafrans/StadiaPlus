import './styles/Snackbar.scss';

export class Snackbar {
    static instance: Snackbar;

    element: Element;
    label: Element;
    closeButton: Element;

    constructor() {
       this.element = document.createElement('div');
       this.element.classList.add('stadiaplus_snackbar');

       this.label = document.createElement('div');
       this.label.classList.add('stadiaplus_snackbar-label');

       this.closeButton = document.createElement('i');
       this.closeButton.innerHTML = 'close';
       this.closeButton.classList.add('material-icons', 'stadiaplus_snackbar-close');

       const self = this;
       this.closeButton.addEventListener('click', () => {
           self.element.classList.remove('active');
       })
    }

    create() {
       document.body.appendChild(this.element);
       this.element.appendChild(this.label);
       this.element.appendChild(this.closeButton);
    }
    
    static init() {
        this.instance = new Snackbar();
        this.instance.create();
    }

    static activate(label: string) {
        const instance = this.instance;

        instance.label.innerHTML = label;
        instance.element.classList.add('active');

        window.setTimeout(()=>{
            instance.element.classList.remove('active');
        }, 5000)
    }
}