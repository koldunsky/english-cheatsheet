<template>
  <div
     class="tense"
     :class="[`tense_${time}`, tense.map((t) => `tense_${t}`)]"
  >
    <div class="content">
      {{phrase}}
    </div>
    <div class="front">
      {{time}} {{tense.map((t) => t).join(' ')}}
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { getVerbIn } from '@/utils/verbConverter'
  import camelCase from 'lodash/camelCase'

  type phraseForm = 'adjective' | 'negative' | 'question' | ''

  export default Vue.extend({
    props: {
      tense: {
        type: Array
      },
      time: {
        type: String
      },
      verb: {
        type: String
      },
      pronoun: {
        type: String
      },
      phraseForm: {
        type: Object as () => phraseForm
      }
    },
    computed: {
      convertedVerb (): string {
        const {
          time,
          tense,
          verb
        } = this

        return getVerbIn[camelCase(`${time}_${tense.join('_')}`)](verb)
      },

      convertedPronoun (): string {
        const map: {[key: string]: string} = {
          first: 'I',
          second: 'you',
          third: 'it',
          third_plural: 'they'
        }
        return map[this.pronoun]
      },

      phrase (): string {
        if (!this.phraseForm) {
          return '-_-'
        }
        return this[this.phraseForm]()
      }
    },
    methods: {
      adjective (): string {
        const {
          convertedPronoun,
          convertedVerb
        } = this

        return `${convertedPronoun} ${convertedVerb}`
      },
      negative (): string {
        const {
          convertedPronoun,
          convertedVerb
        } = this

        return `${convertedPronoun} ${convertedVerb}`
      },
      question (): string {
        const {
          convertedPronoun,
          convertedVerb
        } = this

        return `${convertedPronoun} ${convertedVerb}`
      }
    }
  })
</script>

<style lang="scss" src="./index.scss"></style>
