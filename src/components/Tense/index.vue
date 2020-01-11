<template>
  <div
     class="tense"
     :class="[`tense_${time}`, tense.map((t) => `tense_${t}`)]"
  >
    <div class="content">
      <span
        v-for="type in order"
        :key="type"
        :class="[`word_type_${type}`]"
      >
        {{phraseObject[type]}}
      </span>
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
  import getSecondAuxiliary from '@/utils/getPerfectAuxiliary'
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
        type: String as () => TPhraseForm
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

      const suitableAuxiliary: string = _get(getAuxiliary, `${camelCaseTense}.${phraseForm}.${pronoun}`, '')
      return suitableAuxiliary
    }

    get toBeVerb () {
      const {
        camelCaseTense,
        phraseForm,
        pronoun
      } = this

      const verb: string = _get(getToBeVerb, `${camelCaseTense}.${phraseForm}.${pronoun}`, '')
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

    get order () {
      const {
        camelCaseTense,
        phraseForm
      } = this

      return _get(phraseSequentor, [camelCaseTense, phraseForm], ['pronoun', 'pronoun', 'pronoun'])
    }

    get phraseObject () {
      const {
        convertedPronoun,
        convertedVerb,
        auxiliary,
        secondAuxiliary,
        toBeVerb
      } = this

      return {
        pronoun: convertedPronoun,
        mainVerb: convertedVerb,
        auxiliary: auxiliary,
        have: secondAuxiliary,
        toBe: toBeVerb
      }
    }
  }
</script>

<style lang="scss" src="./index.scss"></style>
