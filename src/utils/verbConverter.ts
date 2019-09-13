import findLastIndex from 'lodash/findLastIndex'
import last from 'lodash/last'
import irregularVerbs from './irregularVerbs'

export const isVowel = (char: string) => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())

const getLastVowelIndex = (verb: string) => {
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

export const lastShortVowel = (verb: string) => {
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

export const getSecondForm = (verb: string) => {
  let index = irregularVerbs.first.indexOf(verb)
  const lastChar = verb.charAt(verb.length - 1)

  if (index !== -1) {
    return irregularVerbs.second[index]
  }

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

export const getGerund = (verb: string) => `${verb}ing`

export const getThirdForm = (verb: string) => {
  return verb
}

interface ITenses {
  [key: string]: string;
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
