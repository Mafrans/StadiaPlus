import React, { useEffect, useState } from 'react';
import { Config } from '../../../../shared/Config';
import SettingsButton from './components/SettingsButton';
import Dropdown from '../../../../shared/components/Dropdown';
import { StadiaCodec, stadiaCodecs } from '../../../../shared/models/StadiaCodec';
import { StadiaResolution, stadiaResolutions } from '../../../../shared/models/StadiaResolution';
import style from './game-settings-component.css';
import classNames from 'classnames';
import { observer } from 'mobx-react';

const GameSettingsComponent = () => {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('click', event => {
            if (event.target instanceof HTMLElement && !event.target.matches('.MmEIfc, .MmEIfc *')) {
                setVisible(false);
            }
        });
    }, []);

    return <>
        <SettingsButton onClick={() => setVisible(!visible)} active={visible} />

        <div className={classNames(style.gameSettings, visible && style.visible, 'MmEIfc')}>
            <strong className={style.heading}>Startup Options</strong>

            <p className={style.name}>Selected Codec</p>
            <Dropdown
                style={{ minWidth: '10rem' }}
                value={() => Config.CODEC.get()}
                onChange={value => void Config.CODEC.set(value as StadiaCodec)}
                options={stadiaCodecs}
            />

            <p className={style.name}>Selected Resolution</p>
            <Dropdown
                style={{ minWidth: '10rem' }}
                value={() => Config.RESOLUTION.get()}
                onChange={value => void Config.RESOLUTION.set(value as StadiaResolution)}
                options={stadiaResolutions}
            />
        </div>
    </>;
}

export default observer(GameSettingsComponent);