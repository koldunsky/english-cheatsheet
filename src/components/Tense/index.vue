<template>
  <div
     class="tense"
     :class="[`tense_${time}`, tense.map((t) => `tense_${t}`)]"
  >
    <div class="content">
      content
    </div>
    <div class="front">
      {{time}} {{tense.map((t) => t).join(' ')}}
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    components: {

    },
    props: ['tense', 'time']
  }
</script>

<style lang="scss" src="./index.scss"></style>
