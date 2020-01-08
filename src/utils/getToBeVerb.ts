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
    second: `aren't`,
    third: `isn't`,
    third_plural: `aren't`
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

const pastSimple: ITense = {
  affirmative: {
    first: '',
    second: '',
    third: '',
    third_plural: ''
  },
  negative: {
    first: ``,
    second: ``,
    third: ``,
    third_plural: ``
  },
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
    first: `wasn't`,
    second: `weren't`,
    third: `wasn't`,
    third_plural: `weren't`
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

  pastSimple,
  pastContinuous,
  // pastPerfect,
  pastPerfectContinuous,

  // futureSimple,
  // futureContinuous,
  // futurePerfect,
  futurePerfectContinuous
} as ITensesWithPhraseForms<IPronoun>
