import { IPhraseForms, ITensesWithPhraseForms } from '../types'

export type TPhraseElement = 'pronoun' | 'mainVerb' | 'auxiliary' | 'have' | 'toBe';

export type TPhraseOrder = Array<TPhraseElement>;

interface IPhraseSequentorTense extends IPhraseForms<TPhraseOrder> {}

const affirmative: TPhraseOrder = ['pronoun', 'auxiliary', 'have', 'toBe', 'mainVerb']
const interrogativeSimple: TPhraseOrder = ['auxiliary', 'pronoun', 'mainVerb']
const interrogativePerfect: TPhraseOrder = ['have', 'pronoun', 'toBe', 'mainVerb'] // Will have he been authoring

const pastSimple: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'mainVerb'],
  interrogative: interrogativeSimple
}

const pastContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'toBe', 'mainVerb'],
  interrogative: ['toBe', 'pronoun', 'mainVerb']
}

const pastPerfect: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'have', 'mainVerb'],
  interrogative: interrogativePerfect
}

const pastPerfectContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'have', 'toBe', 'mainVerb'],
  interrogative: interrogativePerfect
}

const presentSimple: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'mainVerb'],
  interrogative: interrogativeSimple
}

const presentContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'toBe', 'mainVerb'],
  interrogative: ['toBe', 'pronoun', 'mainVerb']
}

const presentPerfect: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'have', 'mainVerb'],
  interrogative: interrogativePerfect
}

const presentPerfectContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'have', 'toBe', 'mainVerb'],
  interrogative: interrogativePerfect
}

const futureSimple: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'mainVerb']
}

const futureContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'toBe', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'toBe', 'mainVerb']
}

const futurePerfect: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'have', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'have', 'mainVerb']
}

const futurePerfectContinuous: IPhraseSequentorTense = {
  affirmative,
  negative: ['pronoun', 'auxiliary', 'have', 'toBe', 'mainVerb'],
  interrogative: ['auxiliary', 'pronoun', 'have', 'toBe', 'mainVerb']
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
