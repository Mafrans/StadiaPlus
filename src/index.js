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
import { PasteFromClipboard } from './components/PasteFromClipboard';
import { StorageManager } from './Storage';
import appdata from './appdata.json';
import { Modal } from './ui/Modal';
import { Shortcut } from './Shortcut';
import { Browser } from './Browser';
import { PopupFix } from './components/PopupFix';

// Always load languages first
Language.init();
Language.load();

Browser.init();

const storageManager = new StorageManager(appdata);
storageManager.checkCacheVersion();

const loader = new ComponentLoader();
const snackbar = new Snackbar();
const modal = new Modal();
const tab = new UITab();

const database = new WebDatabase('https://stadiagamedb.com/data/gamedb.json');
const uuidMap = new WebDatabase('https://stadiagamedb.com/data/uuidmap.json');
database.connect();
uuidMap.connect();

loader.register(new Clock());
// loader.register(new PopupFix());
loader.register(new LibraryFilter(snackbar, database, uuidMap, modal));
loader.register(new ForceCodec(tab, snackbar));
loader.register(new ForceResolution(tab, snackbar));
loader.register(tab);
loader.register(new NetworkMonitor());
loader.register(new StoreFilter(database, uuidMap));
loader.register(new Ratings(database, uuidMap));
loader.register(new AllowWindowedMode());
loader.register(new PasteFromClipboard());

window.addEventListener('load', () => {
    Util.load();
    snackbar.create();
    modal.create();
    loader.start();
})