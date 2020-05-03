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
import { WebDatabase } from './WebDatabase';
import { StoreFilter } from './components/StoreFilter';
import { Ratings } from './components/Ratings';
import { Language } from './Language';
import { AllowWindowedMode } from './components/AllowWindowedMode';

// Always load languages first
Language.init();
Language.load();

const loader = new ComponentLoader();
const snackbar = new Snackbar();
const tab = new UITab();

const database = new WebDatabase('https://stadiagamedb.com/data/gamedb.json');
const uuidMap = new WebDatabase('https://stadiagamedb.com/data/uuidmap.json');
database.connect();
uuidMap.connect();

loader.register(new Clock());
loader.register(new LibraryFilter(snackbar, database, uuidMap));
loader.register(new ForceCodec(tab, snackbar));
loader.register(new ForceResolution(tab, snackbar));
loader.register(tab);
loader.register(new NetworkMonitor());
loader.register(new StoreFilter(database, uuidMap));
loader.register(new Ratings(database, uuidMap));
loader.register(new AllowWindowedMode());

window.addEventListener('load', () => {
    Util.load();
    snackbar.create();
    loader.start();
})