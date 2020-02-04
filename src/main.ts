import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import groupBy from 'lodash/groupBy';
import { firstForm, secondForm, continuousForm } from '../DAS_MODEL/verbs'
import irregularVerbs from './verbConverterCore/irregularVerbsList'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const verbsThatDoubled:Array<string> = []

firstForm.forEach((word, i) => {
  const secondFormOfCurrent = secondForm[i]
  let firstIsDoubled = false
  let secondIsDoubled = false
  secondFormOfCurrent.split('').forEach(function (val, i, arr) {
    if (val === arr[i + 1]) {
      secondIsDoubled = true
    }
  })
  word.split('').forEach(function (val, i, arr) {
    if (val === arr[i + 1]) {
      firstIsDoubled = true
    }
  })

  if (secondIsDoubled && !firstIsDoubled) {
    verbsThatDoubled.push(secondFormOfCurrent)
  }
})

console.info(verbsThatDoubled)
