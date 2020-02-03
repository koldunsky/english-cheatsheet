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
    first: 'do not',
    second: 'do not',
    third: `does not`,
    third_plural: 'do not'
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
  negative: oneForAll('did not'),
  interrogative: oneForAll('did')
}

const futureSimple: ITense = {
  affirmative: oneForAll('will'),
  negative: oneForAll('will not'),
  get interrogative () {
    return this.affirmative
  }
}

const futureContinuous: ITense = {
  affirmative: oneForAll('will'),
  negative: oneForAll('will not'),
  get interrogative () {
    return this.affirmative
  }
}

const futurePerfect: ITense = {
  affirmative: oneForAll('will'),
  negative: oneForAll('will not'),
  get interrogative () {
    return this.affirmative
  }
}

const futurePerfectContinuous: ITense = {
  affirmative: oneForAll('will'),
  negative: oneForAll('will not'),
  get interrogative () {
    return this.affirmative
  }
}

export default {
  presentSimple,

  pastSimple,

  futureSimple,
  futureContinuous,
  futurePerfect,
  futurePerfectContinuous
} as ITensesWithPhraseForms<IPronoun>
