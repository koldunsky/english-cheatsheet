import { ITensesWithPhraseForms, IPhraseForms } from '@/types'
import { IPronoun } from './getAuxiliary'

interface ITense extends IPhraseForms<IPronoun> {}

const oneForAll = (word: string): IPronoun => ({
  first: word,
  second: word,
  third: word,
  third_plural: word
})

const theOnlyOne = (word: string): ITense => ({
  affirmative: oneForAll(word),
  negative: oneForAll(word),
  interrogative: oneForAll(word)
})

const presentPerfect: ITense = {
  affirmative: {
    first: 'have',
    second: 'have',
    third: 'has',
    third_plural: 'have'
  },
  negative: {
    first: 'have not',
    second: 'have not',
    third: 'has not',
    third_plural: 'have not'
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
    first: 'have not',
    second: 'have not',
    third: 'has not',
    third_plural: 'have not'
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

const pastPerfectContinuous: ITense = {
  affirmative: oneForAll('had'),
  negative: oneForAll('had not'),
  get interrogative () {
    return this.affirmative
  }
}

const pastPerfect: ITense = {
  affirmative: oneForAll('had'),
  negative: oneForAll('had not'),
  get interrogative () {
    return this.affirmative
  }
}

const futurePerfect: ITense = theOnlyOne('have')

const futurePerfectContinuous: ITense = theOnlyOne('have')

export default {
  presentPerfect,
  presentPerfectContinuous,

  pastPerfect,
  pastPerfectContinuous,

  futurePerfect,
  futurePerfectContinuous
} as ITensesWithPhraseForms<IPronoun>
