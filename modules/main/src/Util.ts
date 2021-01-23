export default class Util {
    static renderer: HTMLElement | null = null;

    static async updateRenderer(): Promise<void> {
        const renderers = document.querySelectorAll('.lhsE4e>c-wiz');
        let newRenderer = renderers.item(0) as HTMLElement;
        if (renderers.length > 1) {
            newRenderer = Array.from(renderers).find((renderer: Element) => (renderer as HTMLElement).style.opacity === '1') as HTMLElement;
        }

        if (newRenderer != null) this.renderer = newRenderer;
    }
}