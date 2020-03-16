import Logger from './Logger';
import Util from './Util';
import './styles/Global.scss'

import { ComponentLoader } from './ComponentLoader';
import { Clock } from './components/Clock'
import { UITab } from './components/UITab'

const loader = new ComponentLoader();

const tab = new UITab();

loader.register(new Clock(tab));
loader.register(tab);

window.addEventListener('load', () => {
    Util.load();
    loader.start();
})