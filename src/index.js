import Logger from './Logger';
import Util from './util/Util';
import './styles/Global.scss';

import { ComponentLoader } from './ComponentLoader';
import { Clock } from './components/Clock';
import { UITab } from './components/UITab';
import { ForceCodec } from './components/ForceCodec';
import { ForceResolution } from './components/ForceResolution';
import { NetworkMonitor } from './components/NetworkMonitor';
import { Snackbar } from './ui/Snackbar';
import { LibraryFilter } from './components/LibraryFilter';
import { StoreFilter } from './components/StoreFilter';
import { Ratings } from './components/Ratings';
import { Language } from './Language';
import { AllowWindowedMode } from './components/AllowWindowedMode';
import { PasteFromClipboard } from './components/PasteFromClipboard';
import { LocalStorage, StorageManager } from './Storage';
import appdata from './appdata.json';
import { Modal } from './ui/Modal';
import { Browser } from './Browser';
import { StadiaPlusDB } from './StadiaPlusDB';
import { StadiaPlusDBHook } from './components/StadiaPlusDBHook';
import { StadiaGameDB } from './StadiaGameDB';

// Always load languages first
Language.init();
Language.load();

Browser.init();

StadiaGameDB.update();

const storageManager = new StorageManager(appdata);
storageManager.checkCacheVersion();

const loader = new ComponentLoader();
const tab = new UITab();
const webScraper = new StadiaPlusDBHook();

loader.register(new Clock());
// loader.register(new PopupFix());
loader.register(new LibraryFilter(webScraper));
loader.register(new ForceCodec(tab));
loader.register(new ForceResolution(tab));
loader.register(tab);
loader.register(new NetworkMonitor());
loader.register(new StoreFilter());
loader.register(new Ratings());
loader.register(new AllowWindowedMode());
loader.register(new PasteFromClipboard());
// loader.register(new LookingForGroup());
loader.register(webScraper);

StadiaPlusDB.connect('https://stadiaplus.dev')
    .then((connected) => {
        if (!connected) {
            Logger.error('StadiaPlusDB was unable to connect, is the server down?');
            return;
        }

        LocalStorage.AUTH_TOKEN.get()
            .then((token) => {
                StadiaPlusDB.authToken = token;

                StadiaPlusDB.getProfile()
                    .then((profile) => {
                        Logger.info(Language.get('stadiaplusdb.signed-in', { user: profile.name + (profile.tag === '0000' ? '✨' : `#${profile.tag}`) }));
                    })
                    .catch(() => {
                        StadiaPlusDB.authToken = null;
                        Logger.error('Not logged into Stadia+');
                    });
            });
    });

window.addEventListener('load', () => {
    Util.load();
    Snackbar.init();
    Modal.init();
    loader.start();
});
