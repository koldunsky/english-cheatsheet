import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    verb: '',
    pronoun: '',
    phraseForm: ''
  },
  mutations: {
    setVerb (state, verb) {
      state.verb = verb
    },
    setPronoun (state, pronoun) {
      state.pronoun = pronoun
    },
    setPhraseForm (state, phraseForm) {
      state.phraseForm = phraseForm
    }
  },
  actions: {

  }
})
