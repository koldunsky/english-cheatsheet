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
  import Component from 'vue-class-component'
  import _get from 'lodash/get'
  import { getVerbIn } from '@/utils/verbConverter'
  import camelCase from 'lodash/camelCase'
  import convertPronoun from '@/utils/convertPronoun'
  import phraseSequentor from '@/utils/phraseSequentor'
  import getAuxillary from '@/utils/getAuxillary'

  type TPhraseForm = 'adjective' | 'negative' | 'question' | ''
  type TTense = Array<string>

  const AppProps = Vue.extend({
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
        type: String
      }
    }
  })

  @Component({

  })

  export default class Tense extends AppProps {
    get convertedVerb (): string {
      const {
        time,
        tense,
        verb
      } = this

      return getVerbIn[camelCase(`${time}_${tense.join('_')}`)](verb)
    }

    get convertedPronoun (): string {
      return convertPronoun(this.pronoun)
    }

    get camelCaseTense () : string {
      const {
        time,
        tense
      } = this

      return camelCase(`${time}_${tense.join('_')}`)
    }
    get auxiallary () {
      const {
        camelCaseTense,
        phraseForm,
        pronoun
      } = this
      const suitableAuxiliary: string = _get(getAuxillary, [camelCaseTense, phraseForm, pronoun], 'D_D')
      return suitableAuxiliary
    }

    get phrase (): string {
      if (!this.phraseForm) {
        return '-_-'
      }

      return _get(this, this.phraseForm, () => 'Y_Y')()
    }

    azazaMethod (type: string): string {
      const {
        convertedPronoun,
        convertedVerb,
        camelCaseTense,
        auxiallary
      } = this

      const result = _get(phraseSequentor, [camelCaseTense, type], null)

      if (!result) {
        return 'S_S'
      }

      return result(convertedPronoun, auxiallary, convertedVerb)
    }

    adjective (): string {
      return this.azazaMethod('adjective')
    }

    negative (): string {
      return this.azazaMethod('negative')
    }

    question (): string {
      return this.azazaMethod('question')
    }
  }
</script>

<style lang="scss" src="./index.scss"></style>
