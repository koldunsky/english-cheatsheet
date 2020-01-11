<template>
  <div
     class="tense"
     :class="[`tense_${time}`, tense.map((t) => `tense_${t}`), `tense_${time}-${tense.join('-')}`]"
  >
    <div class="content">
      <span
        v-for="(type, index) in order"
        :key="type"
        class="word"
        :class="[`word_type_${type}`]"
      >
        {{ index === 0 ? capitalize(phraseObject[type]) : phraseObject[type]}}</span><span class="end-of-phrase" v-if="phraseForm === 'interrogative'">?</span>
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
      <div
        class="sequence"
      >
        {{rawOrder.join(', ')}}
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
  import phraseSequentor, { TPhraseOrder } from '@/utils/phraseSequentor'
  import getAuxiliary from '@/utils/getAuxiliary'
  import getSecondAuxiliary from '@/utils/getPerfectAuxiliary'
  import getToBeVerb from '@/utils/getToBeVerb'
  import { TOneOfTenses } from '@/types'
  import capitalize from 'lodash/capitalize'

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
    capitalize = capitalize

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

    get rawOrder () {
      const {
        camelCaseTense,
        phraseForm
      } = this

      return _get(phraseSequentor, [camelCaseTense, phraseForm], ['pronoun', 'pronoun', 'pronoun'])
    }

    get order () {
      const {
        camelCaseTense,
        phraseForm
      } = this

      const ordr: TPhraseOrder = _get(phraseSequentor, [camelCaseTense, phraseForm], ['pronoun', 'pronoun', 'pronoun'])

      return ordr.filter((key) => this.phraseObject[key])
    }

    get phraseObject (): {
      pronoun: string,
      mainVerb: string,
      auxiliary: string,
      have: string,
      toBe: string
    } {
      const {
        convertedPronoun,
        convertedVerb,
        auxiliary,
        secondAuxiliary,
        toBeVerb
      } = this

      const almostReady = {
        pronoun: convertedPronoun,
        mainVerb: convertedVerb,
        auxiliary: auxiliary,
        have: secondAuxiliary,
        toBe: toBeVerb
      }

      return almostReady
    }
  }
</script>

<style scoped lang="scss" src="./index.scss"></style>
