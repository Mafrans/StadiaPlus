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
import { StoreFilter } from './components/StoreFilter';
import { Ratings } from './components/Ratings';
import lang_enUS_data from './lang/en-US.json';
import lang_svSE_data from './lang/sv-SE.json';
import lang_frFR_data from './lang/fr-FR.json';
import lang_itIT_data from './lang/it-IT.json';
import lang_enSTEEF_data from './lang/en-STEEF.json';
import { Language } from './Language';

// Always initialize Languages first
const lang_svSE = new Language('sv-SE', lang_svSE_data);
lang_svSE.register();

const lang_enSTEEF = new Language('en-STEEF', lang_enSTEEF_data);
lang_enSTEEF.register();

const lang_frFR = new Language('fr-FR', lang_frFR_data);
lang_frFR.register();

const lang_itIT = new Language('it-IT', lang_itIT_data);
lang_itIT.register();

const lang_enUS = new Language('en-US', lang_enUS_data);
lang_enUS.register();
lang_enUS.setDefault();

const loader = new ComponentLoader();
const snackbar = new Snackbar();
const tab = new UITab();

const database = new Database('https://stadiagamedb.com/data/gamedb.json');
const uuidMap = new Database('https://stadiagamedb.com/data/uuidmap.json');
database.connect();
uuidMap.connect();
Language.init();

loader.register(new Clock());
loader.register(new LibraryFilter(snackbar, database, uuidMap));
loader.register(new ForceCodec(tab, snackbar));
loader.register(new ForceResolution(tab, snackbar));
loader.register(tab);
loader.register(new NetworkMonitor());
loader.register(new StoreFilter(database, uuidMap));
loader.register(new Ratings(database, uuidMap));

window.addEventListener('load', () => {
    Util.load();
    snackbar.create();
    loader.start();
})