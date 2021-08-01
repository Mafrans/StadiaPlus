import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import { StadiaSelectors } from '../../../StadiaSelectors';
import StadiaPlusIcon from '../../../../../shared/resources/components/StadiaPlusIcon';
import classNames from 'classnames';
import style from '../game-settings-component.css';

type SettingsButtonProps = {
    active?: boolean,
    onClick?: (event: React.MouseEvent) => void
}

export default function SettingsButton(props: SettingsButtonProps) {
    const [container, setContainer] = useState<HTMLLIElement>();
    const [clicked, setClicked] = useState<boolean>(false);

    useEffect(() => {
        const containerRoot = document.querySelector(StadiaSelectors.NAVBAR_BUTTONS_RIGHT);
        if(!containerRoot) return;

        const thirdChild = containerRoot.children.item(2)!!;
        const newContainer = document.createElement('li');
        thirdChild.before(newContainer);

        setContainer(newContainer);
    }, []);

    function cancelOthers() {
        const others = document.querySelectorAll(`${StadiaSelectors.NAVBAR_BUTTONS_RIGHT} .YySNWc`);
        others.forEach(el => {
            if (el instanceof HTMLElement) {
                el.click();
            }
        })
    }

    function handleClick(event: React.MouseEvent) {
        cancelOthers();
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 100);

        props.onClick?.call(props.onClick, event);
        event.stopPropagation();
    }

    return container ?
        ReactDOM.createPortal(
            <button
                className={classNames(
                    style.gameSettingsButton,
                    props.active && style.active,
                    clicked && style.clicked
                )}
                onClick={handleClick}
            >
                <StadiaPlusIcon
                    color={props.active ? 'var(--color-neon-cherry)' : 'var(--color-icon-white)'}
                    outlined={true}
                    size={24}
                />
            </button>,
        container) : null;
}