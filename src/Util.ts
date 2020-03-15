class Util {
    /**
     * Stadia's menu bar element, used to know when the player has opened the menu.
     */
    menuElement: HTMLElement;

    constructor() {
        window.addEventListener('load', this.load);
    }

    load() {
        this.menuElement = document.querySelector('.X1asv');
    }

    isMenuOpen() {
        return this.menuElement.style.opacity !== '0';
    }
}
export default new Util();