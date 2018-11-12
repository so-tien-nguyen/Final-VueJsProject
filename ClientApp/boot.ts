import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';

import { storeBuilder } from './store/store';
import { Store } from 'vuex';
import { RootState } from './store/rootstate';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/category', component: require('./components/category/category.vue.html') }


];

const store: Store<RootState> = storeBuilder.vuexStore();

new Vue({
    el: '#app-root',
    store,
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
