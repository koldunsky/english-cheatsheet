import { IPhraseForms, ITensesWithPhraseForms } from '../types'

type TSequentorFn = (pronoun: string, mainVerb: string, auxiliary?: string, have?: string, toBe?: string) => string;

interface IPhraseSequentorTense extends IPhraseForms<TSequentorFn> {
}
const affirmative: TSequentorFn = (pronoun, mainVerb, auxiliary, have, toBe) => (`${pronoun} ${auxiliary} ${toBe} ${mainVerb}`)

const presentSimple: IPhraseSequentorTense = {
  affirmative,
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  interrogative: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const presentPerfect: IPhraseSequentorTense = {
  affirmative,
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  interrogative: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const presentContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  interrogative: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const presentPerfectContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: (pronoun, auxiliary, mainVerb, toBe) => (`${pronoun} ${auxiliary} ${toBe} ${mainVerb}`),
  interrogative: (pronoun, auxiliary, mainVerb, toBe) => (`${auxiliary} ${pronoun} ${toBe} ${mainVerb}?`)
}

const pastSimple: IPhraseSequentorTense = {
  affirmative,
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  interrogative: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const pastContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  interrogative: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const pastPerfect: IPhraseSequentorTense = {
  affirmative,
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  interrogative: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const pastPerfectContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: (pronoun, auxiliary, mainVerb, toBe) => (`${pronoun} ${auxiliary} ${toBe} ${mainVerb}`),
  interrogative: (pronoun, auxiliary, mainVerb, toBe) => (`${auxiliary} ${pronoun} ${toBe} ${mainVerb}?`)
}

const futureSimple: IPhraseSequentorTense = {
  affirmative,
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  interrogative: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const futureContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: (pronoun, auxiliary, mainVerb, toBe) => (`${pronoun} ${auxiliary} ${toBe} ${mainVerb}`),
  interrogative: (pronoun, auxiliary, mainVerb, toBe) => (`${auxiliary} ${pronoun} ${toBe} ${mainVerb}?`)
}
const futurePerfect: IPhraseSequentorTense = {
  affirmative,
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  interrogative: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}
const futurePerfectContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: (pronoun, auxiliary, mainVerb) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  interrogative: (pronoun, auxiliary, mainVerb) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
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
