import Logger from './Logger';
import Util from './Util';
import './styles/Global.scss'

import { ComponentLoader } from './ComponentLoader';
import { Clock } from './components/Clock'
import { UITab } from './components/UITab'
import { ForceCodec } from './components/ForceCodec'
import { ForceResolution } from './components/ForceResolution'
import { NetworkMonitor } from './components/NetworkMonitor';

const loader = new ComponentLoader();

const tab = new UITab();

loader.register(new Clock());
loader.register(new ForceCodec(tab));
loader.register(new ForceResolution(tab));
loader.register(tab);
loader.register(new NetworkMonitor());

window.addEventListener('load', () => {
    Util.load();
    loader.start();
})