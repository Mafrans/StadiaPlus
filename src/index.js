import Logger from './Logger';
import Util from './Util';
import { ComponentLoader } from './ComponentLoader';
import { Clock } from './components/Clock'

const loader = new ComponentLoader();

loader.register(new Clock());

window.addEventListener('load', () => {
    loader.start();
})