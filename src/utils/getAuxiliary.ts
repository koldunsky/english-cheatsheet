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

const presentSimple: ITense = {
  affirmative: {
    first: '',
    second: '',
    third: '',
    third_plural: ''
  },
  negative: {
    first: `don't`,
    second: `don't`,
    third: `doesn't`,
    third_plural: `don't`
  },
  get interrogative () {
    return {
      first: 'do',
      second: 'do',
      third: 'does',
      third_plural: 'do'
    }
  }
}

const pastSimple: ITense = {
  affirmative: oneForAll(''),
  negative: oneForAll(`didn't`),
  interrogative: oneForAll('did')
}

const pastContinuous: ITense = {
  affirmative: oneForAll(''),
  negative: oneForAll(``),
  interrogative: oneForAll('did')
}

const pastPerfect: ITense = {
  affirmative: oneForAll(''),
  negative: oneForAll(``),
  get interrogative () {
    return this.affirmative
  }
}

const futureSimple: ITense = {
  affirmative: oneForAll('will'),
  negative: oneForAll(`won't`),
  get interrogative () {
    return this.affirmative
  }
}

const futureContinuous: ITense = {
  affirmative: oneForAll('will'),
  negative: oneForAll(`won't`),
  get interrogative () {
    return this.affirmative
  }
}

const futurePerfect: ITense = {
  affirmative: oneForAll('will'),
  negative: oneForAll(`won't`),
  get interrogative () {
    return this.affirmative
  }
}

const futurePerfectContinuous: ITense = {
  affirmative: oneForAll('will'),
  negative: oneForAll(`won't`),
  get interrogative () {
    return this.affirmative
  }
}

export default {
  presentSimple,
  // presentContinuous,
  // presentPerfect,
  // presentPerfectContinuous,

  pastSimple,
  pastContinuous,
  pastPerfect,
  // pastPerfectContinuous,

  futureSimple,
  futureContinuous,
  futurePerfect,
  futurePerfectContinuous
} as ITensesWithPhraseForms<IPronoun>
