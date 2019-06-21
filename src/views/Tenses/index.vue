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
        <div
          class="tense"
          v-for="tense in [['simple'], ['continuous'], ['perfect'], ['perfect', 'continuous'] ]"
          :key="tense.join('_')"
          :class="[`tense_${time}`, tense.map((t) => `tense_${t}`)]">
          {{time}} {{tense.map((t) => t).join(' ')}}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>

<script lang="ts">
  import Vue from 'vue'
  import PhraseConstructor from '../../components/PhraseConstructor'

  export default Vue.extend({
    components: {
      PhraseConstructor
    },
    data: () => {
      return {
        times: ['past', 'present', 'future']
      }
    }
  })
</script>
