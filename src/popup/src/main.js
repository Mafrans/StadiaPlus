import Vue from 'vue';
import App from './App.vue';
import MainPage from './MainPage.vue';
import SettingsPage from './SettingsPage.vue';
import VueRouter from 'vue-router';
import lang_enUS_data from '../../lang/en-US.json';
import lang_svSE_data from '../../lang/sv-SE.json';
import lang_frFR_data from '../../lang/fr-FR.json';
import lang_itIT_data from '../../lang/it-IT.json';
import lang_enSTEEF_data from '../../lang/en-STEEF.json';
import { Language } from '../../Language';

// Always initialize Languages first
const lang_enUS = new Language('English (US)', 'en-US', lang_enUS_data);
lang_enUS.register();
lang_enUS.setDefault();

const lang_enSTEEF = new Language('English (Steef)', 'en-STEEF', lang_enSTEEF_data);
lang_enSTEEF.register();

const lang_frFR = new Language('Français (FR)', 'fr-FR', lang_frFR_data);
lang_frFR.register();

const lang_itIT = new Language('Italiano (IT)', 'it-IT', lang_itIT_data);
lang_itIT.register();

const lang_svSE = new Language('Svenska (SE)', 'sv-SE', lang_svSE_data);
lang_svSE.register();

Language.init();

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    { path: '/', component: MainPage },
    { path: '/settings/', component: SettingsPage },
];

const router = new VueRouter({
    base: 'dist/popup.html', // taken from manifest.json
    mode: 'history',
    routes, // short for `routes: routes`
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
