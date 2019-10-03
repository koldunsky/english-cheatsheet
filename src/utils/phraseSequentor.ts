type TSequentorFn = (pronoun: string, auxiliary: string, mainVerb: string) => string;

interface IPhraseSequentorTense {
  adjective: TSequentorFn;
  negative: TSequentorFn;
  question: TSequentorFn
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
  adjective: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  negative: (pronoun: string, auxiliary: string, mainVerb: string) => (`${pronoun} ${auxiliary} ${mainVerb}`),
  question: (pronoun: string, auxiliary: string, mainVerb: string) => (`${auxiliary} ${pronoun} ${mainVerb}?`)
}

const allTheStuff: {[key: string]: IPhraseSequentorTense} = {
  presentSimple,
  presentContinuous,
  presentPerfect,
  presentPerfectContinuous
}

export default allTheStuff
