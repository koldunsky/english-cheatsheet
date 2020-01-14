import findLastIndex from 'lodash/findLastIndex'
import isVowel from '../verbConverterCore/isVowel'
import getSecondForm from '../verbConverterCore/getSecondForm'
import getThirdForm from '../verbConverterCore/getThirdForm'
import { IPhraseForms, ITensesWithPhraseForms } from '@/types'

export type TPhraseForm = 'affirmative' | 'negative' | 'interrogative'

const getLastVowelIndex = (verb: string): number => {
  return findLastIndex(verb.split(''), isVowel)
}

const getPreLastChar = (verb: string) => {
  return verb.slice(-2)[0]
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
  const theCharAfterLastVowel = verb[lastVowelIndex + 1]

  if (lastVowelIndex === -1) {
    return false
  }

  const lastChar: string = verb.slice(-1)

  if (countVowels(verb) < 2) {
    weight = weight + 0.5
  }

  // Соседи не гласные
  if (!isVowel(verb[lastVowelIndex - 1]) && theCharAfterLastVowel ? !isVowel(theCharAfterLastVowel) : true) {
    weight = weight + 1.5
  }

  // Короткое слово
  if (verb.length < 5 && verb.length > 2) {
    weight++
  }

  //  Гласная стоит близко к концу
  if (verb.length - lastVowelIndex <= 2) {
    weight++
  }

  if (lastChar && ['w', 'x', 'y'].includes(lastChar)) {
    return false
  }

  return weight > 3
}

export const getContinuousForm = (verb: string): string => {
  if (verb.slice(-2) === 'ie') {
    return `${verb.slice(0, -2)}ying`
  }

  if (verb.slice(-1) === 'e' && getPreLastChar(verb) !== 'e' && verb.length > 2) {
    return `${verb.slice(0, -1)}ing`
  }

  if (verb.slice(-2) === 'ic') {
    return `${verb.slice(0, -2)}icking`
  }

  if (lastShortVowel(verb)) {
    const lastChar = verb.slice(-1)
    return `${verb}${lastChar}ing`
  }

  return `${verb}ing`
}

export const getGerund = getContinuousForm

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
