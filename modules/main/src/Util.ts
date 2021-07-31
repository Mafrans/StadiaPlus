import { stateStore } from './state/StateStore';
import { DependencyList, useEffect } from 'react';

export let renderer: HTMLElement | null = null;

/**
 * Finds and caches the current web renderer.
 */
export async function updateRenderer(): Promise<void> {
    const renderers = document.querySelectorAll('.lhsE4e>c-wiz');
    let newRenderer = renderers.item(0) as HTMLElement;
    if (renderers.length > 1) {
        newRenderer = Array.from(renderers).find((renderer: Element) => (renderer as HTMLElement).style.opacity === '1') as HTMLElement;
    }

    if (newRenderer != null) setRenderer(newRenderer);
}

export function getPlayerGameId() {
    return location.pathname.substring('/player/'.length, '/player/'.length + 36);
}

export async function setRenderer(newRenderer: HTMLElement): Promise<void> {
    if (newRenderer.isEqualNode(renderer)) {
        return;
    }

    stateStore.setRenderer(newRenderer)
    renderer = newRenderer;
}

export function desandbox(data: string | object | Function, options?: { immediate?: boolean, name?: string }): string {
    const script = document.createElement('script');
    const name = options?.name || randomString(8, Alphabet.LOWERCASE);

    switch(typeof data) {
        case 'string':
            script.innerHTML = data;
            break;

        case 'object':
            script.innerHTML = `window.${name} = ${JSON.stringify(data)};`;
            break;

        case 'function':
            script.innerHTML = `window.${name} = ${data.toString()};`;
            if (options?.immediate) {
                script.innerHTML += `window.${name}();`;
            }
            break;
    }

    script.innerHTML = `
        try {
            ${script.innerHTML}
        }
        catch(e) {
            console.error(e);
        }
    `

    document.body.appendChild(script);
    script.remove();

    return `window.${name}`;
}

export function randomString(length: number, alphabet?: Alphabet) {
    let result = '';
    const chars = alphabet || Alphabet.ASCII;
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * length));
    }

    return result;
}

export function observeAddedNodes(element: Element, mutationType: MutationRecordType, nodeType: number, callback: (mutation: MutationRecord, node: Node) => void) {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === mutationType) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === nodeType) {
                        callback(mutation, node);
                    }
                });
            }
        });
    });

    observer.observe(element, {
        childList: mutationType === 'childList',
        attributes: mutationType === 'attributes',
        characterData: mutationType === 'characterData'
    });
}

export function parent(element: Element, amount: number) {
    let it = element;
    for (let i = 0; i < amount; i++) {
        if (it.parentElement) {
            it = it.parentElement;
        }
        else {
            return null;
        }
    }

    return it;
}

export function lerp(a: number, b: number, time: number) {
    return a + (b - a) * time;
}

export function asyncEffect(fn: () => Promise<void>, deps: DependencyList) {
    return useEffect(() => {fn()}, deps);
}

export function clamp(val: number, min: number, max: number) {
    return Math.min(Math.max(val, min), max);
}

export enum Alphabet {
    NUMERIC = '1234567890',
    LOWERCASE = 'abcdefghijklmnopqrstuvwxyz',
    UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LOWERCASE_NUMERIC = 'abcdefghijklmnopqrstuvwxyz1234567890',
    UPPERCASE_NUMERIC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
    ASCII = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
}