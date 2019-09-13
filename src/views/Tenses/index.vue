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
        >
          {{convertVerb(`${time}_${tense.join('_')}`, verb)}}
        </Tense>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>

<script lang="ts">
  import Vue from 'vue'
  import camelCase from 'lodash/camelCase'
  import { mapState } from 'vuex'

  import Tense from '../../components/Tense'
  import PhraseConstructor from '../../components/PhraseConstructor'
  import verbConverter from '../../utils/verbConverter'

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
    computed: mapState(['verb']),
    methods: {
      convertVerb (tense: string, verb: string): string {
        return verbConverter(verb)[camelCase(tense)]
      }
    }
  })
</script>
