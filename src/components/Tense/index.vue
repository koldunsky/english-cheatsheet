<template>
  <div
     class="tense"
     :class="[`tense_${time}`, tense.map((t) => `tense_${t}`)]"
  >
    <div class="content">
      {{phrase}}
    </div>
    <div class="front">
      <div class="tenseName">
        <div
          class="icon"
          :class="[
            `icon_${time}`,
            `icon_${tense.join('-')}`
          ]"
        />
        {{time}} {{tense.map((t) => t).join(' ')}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import _get from 'lodash/get'
  import { getVerbIn, TPhraseForm } from '@/utils/verbConverter'
  import camelCase from 'lodash/camelCase'
  import convertPronoun from '@/utils/convertPronoun'
  import phraseSequentor from '@/utils/phraseSequentor'
  import getAuxiliary from '@/utils/getAuxiliary'
  import getSecondAuxiliary from '@/utils/getSecondAuxiliary'
  import getToBeVerb from '@/utils/getToBeVerb'
  import { TOneOfTenses } from '@/types'

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
        type: Object as () => TPhraseForm
      }
    }
  })

  @Component

  export default class Tense extends AppProps {
    get convertedVerb (): string {
      const {
        verb,
        camelCaseTense,
        phraseForm
      } = this

      return getVerbIn[camelCaseTense][phraseForm](verb)
    }

    get convertedPronoun (): string {
      return convertPronoun(this.pronoun)
    }

    get camelCaseTense (): TOneOfTenses {
      const {
        time,
        tense
      } = this

      return camelCase(`${time}_${tense.join('_')}`) as TOneOfTenses
    }
    get auxiliary () {
      const {
        camelCaseTense,
        phraseForm,
        pronoun
      } = this

      const suitableAuxiliary: string = _get(getAuxiliary, `${camelCaseTense}.${phraseForm}.${pronoun}`, 'D_D')
      return suitableAuxiliary
    }

    get toBeVerb () {
      const {
        camelCaseTense,
        phraseForm,
        pronoun
      } = this

      const verb: string = _get(getToBeVerb, `${camelCaseTense}.${phraseForm}.${pronoun}`, 'B_B')
      return verb
    }

    get secondAuxiliary () {
      const {
        camelCaseTense,
        phraseForm,
        pronoun
      } = this

      const suitableAuxiliary: string = _get(getSecondAuxiliary, `${camelCaseTense}.${phraseForm}.${pronoun}`, '')
      return suitableAuxiliary
    }

    get phrase (): string {
      if (!this.phraseForm) {
        return '-_-'
      }

      return this.azazaMethod(this.phraseForm)
    }

    azazaMethod (type: string): string {
      const {
        convertedPronoun,
        convertedVerb,
        camelCaseTense,
        auxiliary,
        secondAuxiliary,
        toBeVerb
      } = this

      const result = _get(phraseSequentor, [camelCaseTense, type], null)

      if (!result) {
        return 'R_R'
      }

      return result(convertedPronoun, convertedVerb, auxiliary, toBeVerb, secondAuxiliary)
    }
  }
</script>

<style lang="scss" src="./index.scss"></style>
