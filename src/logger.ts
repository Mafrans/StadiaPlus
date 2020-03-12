const prefix:string = '[Stadia+]';

class Logger {
    info = function(str: string) {
        console.log(`${prefix} %c📃 ${str}`, 'color: black');
    };

    warning = function(str: string) {
        console.log(`${prefix} %c😟 ${str}`, 'color: orange');
    };

    error = function(str: string) {
        console.log(`${prefix} %c❌ ${str}`, 'color: red; font-weight: 700');
    };
}

export default new Logger();