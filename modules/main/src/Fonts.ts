export default class Fonts {
    static load(name: string, weigths: number[]): void {
        const linkElement = document.createElement('link');
        linkElement.href = `https://fonts.googleapis.com/css2?family=${encodeURI(`${name}:wght@${weigths.join(';')}`)}&display=swap`;
        linkElement.rel = 'stylesheet';

        document.head.appendChild(linkElement);
    }
}