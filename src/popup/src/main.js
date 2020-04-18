import Vue from 'vue';
import App from './App.vue';
import MainPage from './MainPage.vue';
import SettingsPage from './SettingsPage.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
    { path: '/', component: MainPage },
    { path: '/settings', component: SettingsPage },
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
