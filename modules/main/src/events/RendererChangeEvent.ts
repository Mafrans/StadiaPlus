import { StadiaPage } from '../StadiaPage';

type RendererChangeEvent = {
    renderer: HTMLElement
    lastRenderer: HTMLElement | null
}

const listeners: ((event: RendererChangeEvent) => void)[] = [];

export function onRendererChange(listener: (event: RendererChangeEvent) => void) {
    listeners.push(listener);
}

export function triggerRendererChangeEvent(event: RendererChangeEvent) {
    listeners.forEach(f => f(event));
}