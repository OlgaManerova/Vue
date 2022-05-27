import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import goods from './goods'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        links,
        goods,
    }
})

export default store;