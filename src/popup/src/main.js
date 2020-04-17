import Vue from 'vue'
import App from './App.vue'
import MainPage from './MainPage.vue'
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    { path: '/', component: MainPage },
    // { path: '/settings', component: Bar }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    router,
    render: function (h) { return h(App) },
}).$mount('#app')
