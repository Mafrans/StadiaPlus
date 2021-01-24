/**
 * Decorator that tells an {@link AbstractComponent} to use React components.
 * Without it, {@link AbstractComponent.onRender} will never run.
 * @example
 * \@ReactComponent
 * class ExampleReactComponent extends AbstractComponent<DefaultProps, DefaultState> {
 *     constructor() {
 *         super({ name: "Example Component" });
 *     }
 *
 *     async onStart() {
 *         Logger.info("Hello Stadia!");
 *     }
 * }
 */
export default function ReactComponent<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        __useReact = true
    };
}