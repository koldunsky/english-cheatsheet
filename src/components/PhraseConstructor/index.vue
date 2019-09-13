<template>
  <div class="phrase-constructor">
    <form @submit.prevent="onSubmit">
      <select
        class="control select pronoun"
        @change="onChangePronoun"
      >
        <option value="default">Choose pronoun</option>
        <option value="first">I</option>
        <option value="second">you</option>
        <option value="third">he/she/it</option>
        <option value="third_plural">they</option>
      </select>

      <select
        class="control select phrase-form"
        @change="onChangePhraseForm"
      >
        <option value="default">Choose phrase form</option>
        <option value="adjective">adjective</option>
        <option value="negative">negative</option>
        <option value="question">question</option>
      </select>

      <input
        type="text"
        class="control input verb"
        placeholder="Type verb in base form"
        @input="onChangeVerb"
      >
      <button>Go!</button>
    </form>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    data () {
      return {}
    },

    methods: {
      ...mapMutations([
        'setPronoun',
        'setPhraseForm',
        'setVerb'
      ]),
      onChangePronoun (e) {
        this.setPronoun(e.target.value)
      },
      onChangePhraseForm (e) {
        this.setPhraseForm(e.target.value)
      },
      onChangeVerb (e) {
        this.setVerb(e.target.value)
      },
      onSubmit (e) {
        console.info('111', e)
      }
    }
  }
</script>
<style src="./index.scss" lang="scss"></style>
