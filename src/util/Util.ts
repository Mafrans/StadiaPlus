class Util {
    /**
     * Stadia's menu bar element, used to know when the player has opened the menu.
     */
    menuElement: HTMLElement;

    constructor() {
    }

    load() {
        this.menuElement = document.querySelector('.X1asv');
    }

    isMenuOpen() {
        return this.menuElement.style.opacity !== '0';
    }

    isInGame() {
        return window.location.pathname.indexOf('player') !== -1;
    }

    isInHome() {
        return window.location.pathname.indexOf('home') !== -1;
    }

    isInStore() {
        return window.location.pathname.indexOf('store') !== -1 && !this.isInStoreDetail();
    }

    isInStoreDetail() {
        return window.location.pathname.indexOf('store/details') !== -1;
    }
    
    desandbox(javascript: string) {
        const script = document.createElement('script');
        script.innerHTML = javascript;
        document.body.appendChild(script);
        script.remove();
    }

    shuffle(array: any[]) {
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
}
export default new Util();