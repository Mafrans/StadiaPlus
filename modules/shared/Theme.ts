export namespace Theme {
    export class Colors {
        static neon = {
            tomato: '#F85536',
            cherry: '#EE3879',
            gradient: 'linear-gradient(90deg, #F85536, #EE3879)',
        }
        static gray = {
            500: '#969696',
            700: '#424242',
            800: '#2B2B2B',
            900: '#202124',
        }
        static green = {
            500: '#15C18E',
        }
        static red = {
            500: '#FA5252',
        }
        static yellow = {
            500: '#FAC94C',
        }
        static stadia = {
            elevation: {
               100: 'rgba(255, 255, 255, 0.06)',
               200: 'rgba(255, 255, 255, 0.12)',
               300: 'rgba(255, 255, 255, 0.18)'
            },
            iconWhite: '#E8EAED'
        }
    }

    export function hexToRGBA(hex: string, alpha?: number) {
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
    
        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }
}