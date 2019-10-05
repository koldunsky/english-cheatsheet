import { IPhraseForms, ITensesWithPhraseForms } from '../types'

type TSequentorFn = (pronoun: string, auxiliary: string, mainVerb: string, extraWordLikeBeenInPPC?: string) => string;

interface IPhraseSequentorTense extends IPhraseForms<TSequentorFn> {
}
const adjective: TSequentorFn = (pronoun, auxiliary, mainVerb) => (`${pronoun} ${mainVerb}`)

const presentSimple: IPhraseSequentorTense = {
  adjective,
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const presentPerfect: IPhraseSequentorTense = {
  adjective: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const presentContinuous: IPhraseSequentorTense = {
  adjective: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const presentPerfectContinuous: IPhraseSequentorTense = {
  adjective: (pronoun, auxiliary, mainVerb, extraWordLikeBeenInPPC) => (`${pronoun} ${auxiliary} ${extraWordLikeBeenInPPC} ${mainVerb}`),
  negative: (pronoun, auxiliary, mainVerb, extraWordLikeBeenInPPC) => (`${pronoun} ${auxiliary} ${extraWordLikeBeenInPPC} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb, extraWordLikeBeenInPPC) => (`${auxiliary} ${pronoun} ${extraWordLikeBeenInPPC} ${mainVerb}?`)
}

const pastSimple: IPhraseSequentorTense = {
  adjective,
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const pastContinuous: IPhraseSequentorTense = {
  adjective: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const pastPerfect: IPhraseSequentorTense = {
  adjective: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const pastPerfectContinuous: IPhraseSequentorTense = {
  adjective: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const futureSimple: IPhraseSequentorTense = {
  adjective: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const futureContinuous: IPhraseSequentorTense = {
  adjective: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const futurePerfect: IPhraseSequentorTense = {
  adjective: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const futurePerfectContinuous: IPhraseSequentorTense = {
  adjective: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const allTheStuff: ITensesWithPhraseForms<TSequentorFn> = {
  presentSimple,
  presentContinuous,
  presentPerfect,
  presentPerfectContinuous,

  pastSimple,
  pastContinuous,
  pastPerfect,
  pastPerfectContinuous,

  futureSimple,
  futureContinuous,
  futurePerfect,
  futurePerfectContinuous
}

export default allTheStuff
