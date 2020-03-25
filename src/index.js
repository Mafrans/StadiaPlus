import Logger from './Logger';
import Util from './Util';
import './styles/Global.scss'

import { ComponentLoader } from './ComponentLoader';
import { Clock } from './components/Clock'
import { UITab } from './components/UITab'
import { ForceCodec } from './components/ForceCodec'
import { ForceResolution } from './components/ForceResolution'
import { NetworkMonitor } from './components/NetworkMonitor';
import { Snackbar } from './ui/Snackbar';
import { LibraryFilter } from './components/LibraryFilter';
import { Database } from './Database';

const loader = new ComponentLoader();
const snackbar = new Snackbar();
const tab = new UITab();

const database = new Database('https://raw.githubusercontent.com/nilicule/StadiaGameDB/master/data/gamedb.json');
database.connect();

loader.register(new Clock());
loader.register(new LibraryFilter(snackbar, database));
loader.register(new ForceCodec(tab, snackbar));
loader.register(new ForceResolution(tab, snackbar));
loader.register(tab);
loader.register(new NetworkMonitor());

window.addEventListener('load', () => {
    Util.load();
    snackbar.create();
    loader.start();
})