export default class Util {
    static renderer: HTMLElement | null = null;

    /**
     * Finds and caches the current web renderer.
     */
    static async updateRenderer(): Promise<void> {
        const renderers = document.querySelectorAll('.lhsE4e>c-wiz');
        let newRenderer = renderers.item(0) as HTMLElement;
        if (renderers.length > 1) {
            newRenderer = Array.from(renderers).find((renderer: Element) => (renderer as HTMLElement).style.opacity === '1') as HTMLElement;
        }

        if (newRenderer != null) this.renderer = newRenderer;
    }

    static desandbox(javascript: string) {
        const script = document.createElement('script');
        script.innerHTML = javascript;
        document.body.appendChild(script);
        script.remove();
    }
}