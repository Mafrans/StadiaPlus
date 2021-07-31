declare module '*.svg' {
    const content: never;
    export default content;
}

declare module '*.png' {
    const content: never;
    export default content;
}

declare module '*.jpg' {
    const content: never;
    export default content;
}

declare module '*.css' {
    const content: any;
    export default content;
}

declare module '*.scss' {
    const content: never;
    export default content;
}

declare module '*.json' {
    const value: never;
    export default value;
}

declare module 'bundle-text:*' {
    const content: string;
    export default content;
}

declare module 'tailwind.macro' {
    const value: any;
    export default value;
}
