import React from 'react';
import LogoImage from 'url:../images/Stadia+Logo.png'
import style from './resources.css';

const StadiaPlusLogo = (props: {context: 'main' | 'popup'}) => {
    return (
        <div className={style.stadiaPlusLogo}>
            <img src={encodeURI(chrome.runtime.getURL(`dist/${props.context}/${LogoImage}`))} alt={'STADIA+'} />
        </div>
    );
}

export default StadiaPlusLogo;