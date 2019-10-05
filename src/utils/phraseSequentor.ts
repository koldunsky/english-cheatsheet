import { IPhraseForms, ITensesWithPhraseForms } from '../types'

type TSequentorFn = (pronoun: string, auxiliary: string, mainVerb: string, extraWordLikeBeenInPPC?: string) => string;

interface IPhraseSequentorTense extends IPhraseForms<TSequentorFn> {
}

const presentSimple: IPhraseSequentorTense = {
  adjective: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun: string, auxiliary: string, mainVerb: string) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const presentPerfect: IPhraseSequentorTense = {
  adjective: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun: string, auxiliary: string, mainVerb: string) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const presentContinuous: IPhraseSequentorTense = {
  adjective: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun: string, auxiliary: string, mainVerb: string) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const presentPerfectContinuous: IPhraseSequentorTense = {
  adjective: (pronoun, auxiliary, mainVerb, extraWordLikeBeenInPPC) => (`${pronoun} ${auxiliary} ${extraWordLikeBeenInPPC} ${mainVerb}`),
  negative: (pronoun, auxiliary, mainVerb, extraWordLikeBeenInPPC) => (`${pronoun} ${auxiliary} ${extraWordLikeBeenInPPC} ${mainVerb}`),
  question: (pronoun, auxiliary, mainVerb, extraWordLikeBeenInPPC) => (`${auxiliary} ${pronoun} ${extraWordLikeBeenInPPC} ${mainVerb}?`)
}

const pastSimple: IPhraseSequentorTense = {
  adjective: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun: string, auxiliary: string, mainVerb: string) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const pastContinuous = {
  adjective: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun: string, auxiliary: string, mainVerb: string) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const pastPerfect = {
  adjective: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun: string, auxiliary: string, mainVerb: string) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const pastPerfectContinuous = {
  adjective: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun: string, auxiliary: string, mainVerb: string) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const futureSimple = {
  adjective: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun: string, auxiliary: string, mainVerb: string) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const futureContinuous = {
  adjective: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun: string, auxiliary: string, mainVerb: string) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const futurePerfect = {
  adjective: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun: string, auxiliary: string, mainVerb: string) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const futurePerfectContinuous = {
  adjective: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun: string, auxiliary: string, mainVerb: string) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
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
