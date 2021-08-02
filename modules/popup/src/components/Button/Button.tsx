import React, { ReactElement, MouseEvent, PropsWithChildren } from 'react';
import style from './button.css';
import classNames from 'classnames';

export interface ButtonProps {
    type?: 'primary' | 'outline' | 'link'
    icon?: ReactElement
    onClick?: (event: MouseEvent) => void
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
    return <div className={classNames(style.outline, style[`${props.type ?? 'primary'}Type`])}>
        <button className={style.button} onClick={props.onClick}>
            <div className={style.icon}>{ props.icon }</div>
            <p className={style.label}>{ props.children }</p>
        </button>
    </div>
}