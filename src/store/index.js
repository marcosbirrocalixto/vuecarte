import Vue from 'vue'
import Vuex from 'vuex'

import { state, mutations } from './default'
import companies from './modules/companies'
import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        companies,
        auth        
    },
    state,
    mutations   
})

export default store