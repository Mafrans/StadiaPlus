/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
const prefix = '[Stadia+]';

class Logger {
    info(...obj: any[]) {
        console.log(`${prefix} %c📃 ${obj.join(' ')}`, 'color: black');
    }

    warning(...obj: any[]) {
        console.log(`${prefix} %c😟 ${obj.join(' ')}`, 'color: orange');
    }

    error(...obj: any[]) {
        console.log(`${prefix} %c❌ ${obj.join(' ')}`, 'color: red; font-weight: 700');
    }

    component(...obj: any[]) {
        console.log(`${prefix} %c🧩 ${obj.join(' ')}`, 'color: darkgreen');
    }

    /**
     * Dubiously created by Adrian Cooney
     * @author http://adriancooney.github.io
     */
    image(url: string, width: number, height: number) {
        const getBox = (w: number, h: number) => ({
            string: '+',
            style: `font-size: 1px; padding: ${Math.floor(h / 2)}px ${Math.floor(w / 2)}px; line-height: 0;`,
        });

        const dim = getBox(width, height);
        console.log(`%c${dim.string}`, `${dim.style}background: url(${url}); background-size: ${width}px ${height}px; color: transparent;`);
    }
}

export default new Logger();
