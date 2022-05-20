import Vue from 'vue';
import VueRouter from 'vue-router';

import HeroView from '../views/HeroView';
import OurCoffee from '../views/OurCoffee';
import Goodspage from '../views/Goodspage';
import Contacts from '../views/Contacts';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffee },
    { path: '/goodspage', component: Goodspage },
    { path: '/contacts', component: Contacts },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;