export type TOneOfTenses =
'presentSimple' |
'presentContinuous' |
'presentPerfect' |
'presentPerfectContinuous' |
'pastSimple' |
'pastContinuous' |
'pastPerfect' |
'pastPerfectContinuous' |
'futureSimple' |
'futureContinuous' |
'futurePerfect' |
'futurePerfectContinuous'

export interface IPhraseForms<T> {
  affirmative: T;
  negative: T;
  interrogative: T;
}

export interface ITensesList<T> {
  presentSimple: T;
  presentContinuous: T;
  presentPerfect: T;
  presentPerfectContinuous: T;

  pastSimple: T;
  pastContinuous: T;
  pastPerfect: T;
  pastPerfectContinuous: T;

  futureSimple: T;
  futureContinuous: T;
  futurePerfect: T;
  futurePerfectContinuous: T;
}

export interface ITensesWithPhraseForms<T> extends ITensesList<IPhraseForms<T>>{}
