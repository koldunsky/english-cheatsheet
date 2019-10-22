import findLastIndex from 'lodash/findLastIndex'
import last from 'lodash/last'
import isVowel from '../verbConverterCore/isVowel'
import getSecondForm from '../verbConverterCore/getSecondForm'
import getThirdForm from '../verbConverterCore/getThirdForm'
import { IPhraseForms, ITensesWithPhraseForms } from '@/types'

export type TPhraseForm = 'affirmative' | 'negative' | 'interrogative'

const getLastVowelIndex = (verb: string): number => {
  return findLastIndex(verb.split(''), isVowel)
}

const countVowels = (verb: string): number => {
  return verb.split('').reduce((acc: number, char: string) => {
    if (isVowel(char)) {
      acc++
    }

    return acc
  }, 0)
}

export const lastShortVowel = (verb: string): boolean => {
  let weight = 0
  const lastVowelIndex = getLastVowelIndex(verb)
  const lastChar: string | undefined = last(verb.split(''))

  if (countVowels(verb) < 2) {
    weight++
  }

  // Соседи не гласные
  if (!isVowel(verb[lastVowelIndex - 1]) && !isVowel(verb[lastVowelIndex + 1])) {
    weight++
  }

  // Короткое слово
  if (verb.length < 5) {
    weight++
  }

  //  Согласная стоит ближе к концу
  if (verb.length - lastVowelIndex <= 2) {
    weight++
  }

  if (lastChar && ['w', 'x', 'y'].includes(lastChar)) {
    return false
  }

  return weight > 3
}

export const getGerund = (verb: string): string => `${verb}ing`

type TTransformFunction = (verb: string) => string;

type TGeneric = TTransformFunction;

const oneForAllPhraseForms = (entity: TGeneric): IPhraseForms<TGeneric> => ({
  affirmative: entity,
  negative: entity,
  interrogative: entity
})

const dontTransform = (verb: string) => verb

export const getVerbIn: ITensesWithPhraseForms<TTransformFunction> = {
  presentSimple: oneForAllPhraseForms(dontTransform),
  presentContinuous: oneForAllPhraseForms(getGerund),
  presentPerfect: oneForAllPhraseForms(getThirdForm),
  presentPerfectContinuous: oneForAllPhraseForms(getGerund),

  pastSimple: {
    affirmative: getSecondForm,
    negative: dontTransform,
    interrogative: dontTransform
  },
  pastContinuous: oneForAllPhraseForms(getGerund),
  pastPerfect: oneForAllPhraseForms(getThirdForm),
  pastPerfectContinuous: oneForAllPhraseForms(getGerund),

  futureSimple: oneForAllPhraseForms(dontTransform),
  futureContinuous: oneForAllPhraseForms(getGerund),
  futurePerfect: oneForAllPhraseForms(getThirdForm),
  futurePerfectContinuous: oneForAllPhraseForms(getGerund)
}
