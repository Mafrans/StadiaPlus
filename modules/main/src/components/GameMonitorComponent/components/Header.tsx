import React from "react"
import { CgClose } from 'react-icons/cg';
import style from '../game-monitor-component.css';

export type HeaderProps = {
    visible?: boolean;
    onClose?: () => void;
    onGrab?: (event: React.MouseEvent) => void
}

const Header = (props: HeaderProps) => props.visible ? <>
    <div className={style.header} onMouseDown={props.onGrab!}>
        {/*  TODO: Add translations  */}
        <p>Game Monitor</p>
        <button onClick={() => props.onClose!()}>
            <CgClose color={'#ffffff'} size={24} />
        </button>
    </div>
    <hr className={style.divider} />
</> : null;

export default Header