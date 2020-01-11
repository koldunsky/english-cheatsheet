<template>
  <div class="tense-present-simple">
  </div>
</template>

<script>
  import Mixin from '../mixin'

  export default {
    mixins: [ Mixin ],
    data () {
      return {}
    },
    computed: {
      negative () {
        return (<div></div>)
      }
    }
  }
</script>
<style scoped src="./index.scss" lang="scss"></style>
