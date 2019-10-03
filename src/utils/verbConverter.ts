import findLastIndex from 'lodash/findLastIndex'
import last from 'lodash/last'
import irregularVerbs from './irregularVerbs'

export const isVowel = (char: string): boolean => {
  if (!char) {
    console.trace()
  }

  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())
}

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

export const getSecondForm = (verb: string): string => {
  if (!verb) {
    return ''
  }

  let index = irregularVerbs.first.indexOf(verb)

  if (index !== -1) {
    return irregularVerbs.second[index]
  }

  return getRegularVerPastForm(verb)
}

export const getThirdForm = (verb: string): string => {
  if (!verb) {
    return ''
  }

  let index = irregularVerbs.first.indexOf(verb)

  if (index !== -1) {
    return irregularVerbs.third[index]
  }

  return getRegularVerPastForm(verb)
}

export const getRegularVerPastForm = (verb: string): string => {
  if (irregularVerbs.first.includes(verb)) {
    console.warn(verb, 'is irregular verb, to convert verb use `getThirdForm` or `getSecondForm` instead')
    return '*see console*'
  }

  const lastChar = verb.charAt(verb.length - 1)

  if (lastChar === 'e') {
    return `${verb}d`
  }

  if (lastChar === 'y' && !isVowel(verb.charAt(verb.length - 2))) {
    return `${verb.slice(0, -1)}ied`
  }

  if (lastChar === 'l') {
    return `${verb}led`
  }

  if (lastShortVowel(verb)) {
    const lastChar = last(verb.split(''))
    return `${verb}${lastChar}ed`
  }

  return `${verb}ed`
}

export const getGerund = (verb: string): string => `${verb}ing`

interface ITenses {
  [key: string]: string;
}

interface IVerbConverterMap {
  [key: string]: (verb: string) => string;
}

export const getVerbIn: IVerbConverterMap = {
  presentSimple: (verb: string): string => verb,
  presentContinuous: getGerund,
  presentPerfect: getThirdForm,
  presentPerfectContinuous: getGerund,

  pastSimple: getSecondForm,
  pastContinuous: getGerund,
  pastPerfect: getThirdForm,
  pastPerfectContinuous: getGerund,

  futureSimple: (verb: string): string => verb,
  futureContinuous: getGerund,
  futurePerfect: getThirdForm,
  futurePerfectContinuous: getGerund
}

export default (verb: string): ITenses => ({
  presentSimple: verb,
  presentContinuous: getGerund(verb),
  presentPerfect: getThirdForm(verb),
  presentPerfectContinuous: getGerund(verb),

  pastSimple: getSecondForm(verb),
  pastContinuous: getGerund(verb),
  pastPerfect: getThirdForm(verb),
  pastPerfectContinuous: getGerund(verb),

  futureSimple: verb,
  futureContinuous: getGerund(verb),
  futurePerfect: getThirdForm(verb),
  futurePerfectContinuous: getGerund(verb)
})
