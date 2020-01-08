import { IPhraseForms, ITensesWithPhraseForms } from '../types'

type TPhraseOrder = Array<'pronoun' | 'mainVerb' | 'auxiliary' | 'have' | 'toBe'>;

interface IPhraseSequentorTense extends IPhraseForms<TPhraseOrder> {}

// `${pronoun} ${auxiliary} ${have} ${toBe} ${mainVerb}
const affirmative: TPhraseOrder = ['pronoun', 'mainVerb', 'auxiliary', 'have', 'toBe']
// 'pronoun', 'auxiliary', 'have', 'toBe', 'mainVerb'

const presentSimple: IPhraseSequentorTense = {
  affirmative: ['pronoun', 'mainVerb'],
  negative: ['pronoun', 'auxiliary', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'mainVerb']
}

const presentPerfect: IPhraseSequentorTense = {
  affirmative: ['pronoun', 'have', 'mainVerb'],
  negative: ['pronoun', 'auxiliary', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'mainVerb']
}

const presentContinuous: IPhraseSequentorTense = {
  affirmative: ['pronoun', 'toBe', 'mainVerb'],
  negative: ['pronoun', 'auxiliary', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'mainVerb']
}

const presentPerfectContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'toBe', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'toBe', 'mainVerb']
}

const pastSimple: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'mainVerb']
}

const pastContinuous: IPhraseSequentorTense = {
  affirmative: ['pronoun', 'toBe', 'mainVerb'],
  negative: ['pronoun', 'auxiliary', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'mainVerb']
}
const pastPerfect: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'mainVerb']
}
const pastPerfectContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'toBe', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'toBe', 'mainVerb']
}

const futureSimple: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'mainVerb']
}
const futureContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: ['auxiliary', 'pronoun', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'toBe', 'mainVerb']
}
const futurePerfect: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'mainVerb']
}
const futurePerfectContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'mainVerb']
}

const allTheStuff: ITensesWithPhraseForms<TPhraseOrder> = {
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
