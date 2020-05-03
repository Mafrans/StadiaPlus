import './styles/Snackbar.scss';

export class Snackbar {
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

    activate(label: string) {
        this.label.innerHTML = label;
        this.element.classList.add('active');

        const self = this;
        window.setTimeout(()=>{
            self.element.classList.remove('active');
        }, 5000)
    }
}