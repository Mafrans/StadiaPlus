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

// Always load languages first
Language.init();
Language.load(() => {
    new Vue({
        router,
        render: h => h(App),
    }).$mount('#app');
});
