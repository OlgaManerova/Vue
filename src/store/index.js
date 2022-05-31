import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import goods from './goods'
import cofee from './cofee'
import bestSellers from './bestSellers'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        links,
        goods,
        cofee,
        bestSellers,
    }
})

export default store;