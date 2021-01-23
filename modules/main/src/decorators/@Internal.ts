export default function Internal(func?: Function | string, ...args: unknown[]) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor) {
        if (typeof func == 'string') {
            target![func](...args);
        }
        else {
            func!(...args);
        }
    }
}