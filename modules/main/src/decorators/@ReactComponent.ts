export default function ReactComponent<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        __useReact = true
    };
}