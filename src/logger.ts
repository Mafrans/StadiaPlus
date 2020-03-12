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
}

export default new Logger();