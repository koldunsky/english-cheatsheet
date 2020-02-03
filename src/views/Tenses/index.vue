<template>
  <div class="tenses">
    <div class="tenses__phrase-constructor">
      <PhraseConstructor />
    </div>
    <div class="tenses-grid">
      <div
        v-for="time in ['past', 'present', 'future']"
        :key="time"
        class="time-block"
        :class="`time-block__${time}`"
      >
        <Tense
          v-for="tense in [['simple'], ['continuous'], ['perfect'], ['perfect', 'continuous'] ]"
          :key="tense.join('_')"
          :time="time"
          :tense="tense"
          :verb="verb"
          :pronoun="pronoun"
          :phraseForm="phraseForm"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./index.scss"></style>

<script lang="ts">
  import Vue from 'vue'
  import { mapState } from 'vuex'

  import Tense from '../../components/Tense'
  import PhraseConstructor from '../../components/PhraseConstructor'

  export default Vue.extend({
    components: {
      PhraseConstructor,
      Tense
    },
    data: () => {
      return {
        times: ['past', 'present', 'future']
      }
    },
    computed: mapState(['verb', 'pronoun', 'phraseForm'])
  })
</script>
