import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: { name: 'home' },
            component: Home,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import(/* webpackChunkName: "home" */ './views/home/index.vue'),
                    children: [],
                },
                {
                    path: '/product',
                    name: 'product',
                    component: () => import(/* webpackChunkName: "home" */ './views/product/index.vue'),
                    children: [],
                },
            ],
        },
    ],
});
