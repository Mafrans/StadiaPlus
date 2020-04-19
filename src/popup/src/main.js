import Vue from 'vue';
import App from './App.vue';
import MainPage from './MainPage.vue';
import SettingsPage from './SettingsPage.vue';
import DeveloperPage from './DeveloperPage.vue';
import VueRouter from 'vue-router';
import { Language } from '../../Language';

Vue.config.productionTip = false;
Vue.use(VueRouter);
    
const routes = [
    { path: '/', component: MainPage },
    { path: '/settings/', component: SettingsPage },
    { path: '/settings/developer', component: DeveloperPage },
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
