import { StadiaPage } from '../StadiaPage';

type AuthenticatedEvent = {
    token: string
}

const listeners: ((event: AuthenticatedEvent) => void)[] = [];

export function onAuthenticated(listener: (event: AuthenticatedEvent) => void) {
    listeners.push(listener);
}

export function triggerAuthenticatedEvent(event: AuthenticatedEvent) {
    listeners.forEach(f => f(event));
}