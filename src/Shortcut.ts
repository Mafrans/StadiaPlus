import downloader from './util/downloader';

export class Shortcut {
    url: string;
    name: string;
    constructor(url: string, name: string) {
        this.url = url;
        this.name = name;
    }

    save() {
        downloader.download(`<html><body><script>window.location="${this.url}"</script></body></html>`, this.name + ".htm", "text/html");
    }
}