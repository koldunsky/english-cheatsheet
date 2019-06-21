<template>
  <div class="tenses">

    // Past
    <div class="tense tense_past tense_simple">Past Simple</div>
    <div class="tense tense_past tense_continuous">Past continuous</div>
    <div class="tense tense_past tense_perfect">Past Perfect</div>
    <div class="tense tense_past tense_perfect tense_continuous">Past Perfect continuous</div>

    // Present
    .tense.tense_present.tense_simple
    | Present Simple
    .tense.tense_present.tense_continuous
    | Present continuous
    .tense.tense_present.tense_perfect
    | Present Perfect
    .tense.tense_present.tense_perfect.tense_continuous
    | Present Perfect continuous

    // Future
    .tense.tense_future.tense_simple
    | Future Simple
    .tense.tense_future.tense_continuous
    | Future continuous
    .tense.tense_future.tense_perfect
    | Future Perfect
    .tense.tense_future.tense_perfect.tense_continuous
    | Future Perfect continuous
  </div>
</template>

<script lang="ts">
  import PhraseConstructor from '../PhraseConstructor'

  export default {
    components: {

    },
    props: ['continuous', 'perfect', 'time']
  }
</script>
