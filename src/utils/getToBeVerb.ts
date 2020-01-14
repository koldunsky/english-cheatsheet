import { ITensesWithPhraseForms, IPhraseForms } from '@/types'

export interface IPronoun {
  first: string;
  second: string;
  third: string;
  third_plural: string;
}

interface ITense extends IPhraseForms<IPronoun> {
}

const oneForAll = (word: string): IPronoun => ({
  first: word,
  second: word,
  third: word,
  third_plural: word
})

const presentContinuous: ITense = {
  affirmative: {
    first: 'am',
    second: 'are',
    third: 'is',
    third_plural: 'are'
  },
  negative: {
    first: `am not`,
    second: `are not`,
    third: `is not`,
    third_plural: `are not`
  },
  get interrogative () {
    return this.affirmative
  }
}

const presentPerfectContinuous: ITense = {
  affirmative: oneForAll('been'),
  negative: oneForAll('been'),
  get interrogative () {
    return this.affirmative
  }
}

const pastContinuous: ITense = {
  affirmative: {
    first: 'was',
    second: 'were',
    third: 'was',
    third_plural: 'were'
  },
  negative: {
    first: 'was not',
    second: 'were not',
    third: 'was not',
    third_plural: 'were not'
  },
  get interrogative () {
    return this.affirmative
  }
}

const pastPerfectContinuous: ITense = {
  affirmative: oneForAll('been'),
  get negative () {
    return this.affirmative
  },
  get interrogative () {
    return this.affirmative
  }
}

const futureContinuous: ITense = {
  affirmative: oneForAll(''),
  negative: oneForAll('be'),
  interrogative: oneForAll('be')
}

const futurePerfectContinuous: ITense = {
  affirmative: oneForAll('been'),
  get negative () {
    return this.affirmative
  },
  get interrogative () {
    return this.affirmative
  }
}

export default {
  presentContinuous,
  presentPerfectContinuous,

  pastContinuous,
  pastPerfectContinuous,

  futureContinuous,
  futurePerfectContinuous
} as ITensesWithPhraseForms<IPronoun>
