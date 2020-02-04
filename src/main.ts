import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { firstForm, secondForm, doubledIndexes } from '../DAS_MODEL/verbs'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

doubledIndexes.forEach((index: number) => {
  console.info(firstForm[index], secondForm[index])
})
