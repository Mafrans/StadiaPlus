import React from 'react';
import LogoImage from '../images/Stadia+Logo.png'
import style from 'resources.css';

const StadiaPlusLogo = () => {
    return (
        <div className={style.stadiaPlusLogo}>
            <img src={LogoImage} alt={'STADIA+'} />
        </div>
    );
}

export default StadiaPlusLogo;