import Logger from '../Logger';

export class CaptureItem {
    public id: string | null = null;
    public ageString: string | null = null;
    public thumbnail: string | null = null;
    public isVideo = false;

    constructor(element: HTMLElement) {
        if (element.childNodes[3].firstChild === null
                || element.childNodes[3].firstChild.firstChild === null) {
            Logger.error('A capture couldn\'t be created.');
            return;
        }

        this.id = element.getAttribute('data-capture-id');
        this.ageString = element.childNodes[3].firstChild.firstChild.textContent;
        this.thumbnail = (element.childNodes[1] as HTMLElement).getAttribute('data-thumbnail');

        this.isVideo = element.querySelector('.MUpfsb') != null;
    }

    open(): void {
        if (this.id === null) return;
        (document.querySelector(`.MykDQe[data-capture-id="${this.id}"]`) as HTMLElement).click();
    }
}
