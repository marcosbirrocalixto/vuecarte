require('./bootstrap')
require('./plugins')
import Vue from 'vue'
import BaseTemplate from './layouts/BaseTemplate'
import router from './routes'
import store from './store'

Vue.config.productionTip = false

/**
 * Componentes Globais
 */
Vue.component('preloader-component', () => import('./components/Preloader'))

new Vue({
  render: h => h(BaseTemplate),
  router,
  store
}).$mount('#app')

