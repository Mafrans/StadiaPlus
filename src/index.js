import Logger from './Logger';
import Util from './Util';
import { ComponentLoader } from './ComponentLoader';
import { Clock } from './components/Clock'
import { UITab } from './components/UITab'

const loader = new ComponentLoader();

loader.register(new Clock());
loader.register(new UITab());

window.addEventListener('load', () => {
    Util.load();
    loader.start();
})