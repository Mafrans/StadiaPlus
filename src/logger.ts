const prefix:string = '[Stadia+]';

class Logger {
    info = function(...obj: any[]) {
        console.log(`${prefix} %c📃 ${obj.join(' ')}`, 'color: black');
    };

    warning = function(...obj: any[]) {
        console.log(`${prefix} %c😟 ${obj.join(' ')}`, 'color: orange');
    };

    error = function(...obj: any[]) {
        console.log(`${prefix} %c❌ ${obj.join(' ')}`, 'color: red; font-weight: 700');
    };

    /**
     * Dubiously created by Adrian Cooney
     * http://adriancooney.github.io
     */
    image = function(url: string, width: number, height: number) {
        const getBox = function(width:number, height:number) {
            return {
                string: "+",
                style: "font-size: 1px; padding: " + Math.floor(height/2) + "px " + Math.floor(width/2) + "px; line-height: 0;"
            }
        }

        var dim = getBox(width, height);
        console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (width) + "px " + (height) + "px; color: transparent;");
    };
}

export default new Logger();