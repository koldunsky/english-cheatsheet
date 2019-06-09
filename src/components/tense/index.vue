<template lang="pug">
  .tenses
    // Past
    .tense.tense_past.tense_simple
      |Past Simple
    .tense.tense_past.tense_continuous
      |Past continuous
    .tense.tense_past.tense_perfect
      |Past Perfect
    .tense.tense_past.tense_perfect.tense_continuous
      |Past Perfect continuous

    // Present
    .tense.tense_present.tense_simple
      |Present Simple
    .tense.tense_present.tense_continuous
      |Present continuous
    .tense.tense_present.tense_perfect
      |Present Perfect
    .tense.tense_present.tense_perfect.tense_continuous
      |Present Perfect continuous

    // Future
    .tense.tense_future.tense_simple
      |Future Simple
    .tense.tense_future.tense_continuous
      |Future continuous
    .tense.tense_future.tense_perfect
      |Future Perfect
    .tense.tense_future.tense_perfect.tense_continuous
      |Future Perfect continuous
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['continuous', 'perfect', 'time']
})
</script>
