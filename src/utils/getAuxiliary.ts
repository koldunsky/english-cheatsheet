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

const presentPerfect: ITense = {
  affirmative: {
    first: 'have',
    second: 'have',
    third: 'has',
    third_plural: 'have'
  },
  negative: {
    first: `haven't (have not)`,
    second: `haven't (have not)`,
    third: `hasn't (has not)`,
    third_plural: `haven't (have not)`
  },
  get interrogative () {
    return {
      first: 'have',
      second: 'have',
      third: 'has',
      third_plural: 'have'
    }
  }
}

const presentPerfectContinuous: ITense = {
  affirmative: {
    first: 'have',
    second: 'have',
    third: 'has',
    third_plural: 'have'
  },
  negative: {
    first: `haven't`,
    second: `haven't`,
    third: `hasn't`,
    third_plural: `haven't`
  },
  get interrogative () {
    return {
      first: 'have',
      second: 'have',
      third: 'has',
      third_plural: 'have'
    }
  }
}

const pastPerfect: ITense = {
  affirmative: oneForAll('had'),
  negative: oneForAll(`hadn't`),
  get interrogative () {
    return this.affirmative
  }
}

const pastPerfectContinuous: ITense = {
  affirmative: oneForAll('had'),
  negative: oneForAll(`hadn't`),
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
  presentPerfect,
  presentPerfectContinuous,

  // pastSimple,
  // pastContinuous,
  pastPerfect,
  pastPerfectContinuous,

  futureSimple,
  futureContinuous,
  futurePerfect,
  futurePerfectContinuous
} as ITensesWithPhraseForms<IPronoun>
