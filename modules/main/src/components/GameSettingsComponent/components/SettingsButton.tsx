import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ReactDOM from 'react-dom';
import { Theme } from '../../../../../shared/Theme';
import { PropsWithChildren, useEffect, useState } from 'react';
import { StadiaSelectors } from '../../../StadiaSelectors';
import StadiaPlusIcon from '../../../../../shared/resources/StadiaPlusIcon';

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
            <Wrapper active={!!props.active} clicked={clicked} onClick={handleClick}>
                <StadiaPlusIcon color={props.active ? Theme.Colors.neon.cherry : Theme.Colors.stadia.iconWhite} outlined={true} size={24} />
            </Wrapper>,
        container) : null;
}

const Wrapper = styled.div<{active: boolean, clicked: boolean}>`
    ${tw`
        cursor-pointer
        w-10 h-10
        flex justify-center items-center
        rounded-full
    `}
    margin: 0 0 0 0.625rem;
    
    ${props => `
        ${props.active ? '&:only-child' : '&:hover'} {
            background-color: ${Theme.Colors.stadia.elevation['100']};
        }
        
        ${props.clicked && `
            animation: activate 0.1s linear;
            animation-iteration-count: 1;
        `}
    `}
  
    @keyframes activate {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(2px);
        }
        
        100% {
            transform: translateY(0px);
        }
    }
`;