<template>
  <div class="phrase-constructor">

    <select
      class="control select pronoun"
      @change="setPhraseForm"
    >
      <option value="default">Choose pronoun</option>
      <option value="first">I</option>
      <option value="second">you</option>
      <option value="third">he/she/it</option>
      <option value="third_plural">they</option>
    </select>

    <select
      class="control select phrase-form"
      @change="setPronoun"
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
      @input="setVerb"
    >
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },

    methods: {
      setPronoun (e) {
        console.info(e.target.value)
        // this.$state.store.commit()
      },
      setPhraseForm (e) {
        console.info(e.target.value)
        // this.$state.store.commit()
      },
      setVerb (e) {
        console.info(e.target.value)
        // this.$state.store.commit()
      }
    }
  }
</script>
<style src="./index.scss" lang="scss"></style>
