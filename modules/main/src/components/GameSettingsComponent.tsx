import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import ReactComponent from '../decorators/@ReactComponent';
import Dropdown from './subcomponents/Dropdown';
import ReactDOM from 'react-dom';
import GameCard from './subcomponents/GameCard';

interface IGameSettingsComponentState extends DefaultState{
    container: Element | null;
}

@ReactComponent
export default class GameSettingsComponent extends AbstractComponent<DefaultProps, IGameSettingsComponentState> {
    constructor() {
        super({ name: "GameSettingsComponent" });
    }

    async onStart() {
        this.setState(() => ({
            container: null,
        }))

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    console.log('1');
                    mutation.addedNodes.forEach(node => {
                        // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
                        if (node.nodeType === 1) {
                            const element = node as HTMLElement;
                            if(element.classList.contains('llhEMd')) {
                                this.updateContainer();
                            }
                        }
                    })
                }
            })
        });
        observer.observe(document.body, { childList: true })
    }

    async updateContainer() {
        if (document.querySelector('.EST2y') === null) {
            // Try again 4 times per second until it works
            setTimeout(this.updateContainer.bind(this), 250);
            return;
        }

        const container = document.createElement('div');
        container.id = 'stadiaplus-game-settings';
        document.querySelector('.EST2y')!.parentElement!.insertBefore(container, document.querySelector('.EST2y'));

        this.setState(() => ({
            container,
        }))
    }

    render(): null | React.ReactPortal {
        if(this.state.container === undefined || this.state.container === null) return null;

        return ReactDOM.createPortal(
            <div>
                <Dropdown
                    style={{ width: 250 }}
                    options={[
                        { value: 'en_US', label: 'English' },
                        { value: 'de_DE', label: 'Deutsh' },
                        { value: 'es_ES', label: 'Español' },
                        { value: 'sv_SE', label: 'Svenska' },
                        { value: 'ar_RR', label: 'Pirate Speak' }
                    ]}
                />
            </div>,
            this.state.container,
        );
    }
}

