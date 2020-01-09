import { ITensesWithPhraseForms, IPhraseForms } from '@/types'
import { IPronoun } from './getAuxiliary'

interface ITense extends IPhraseForms<IPronoun> {}

const oneForAll = (word: string): IPronoun => ({
  first: word,
  second: word,
  third: word,
  third_plural: word
})

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

const pastPerfectContinuous: ITense = {
  affirmative: oneForAll('had'),
  negative: oneForAll(`hadn't`),
  get interrogative () {
    return this.affirmative
  }
}
//
// const futureContinuous: ITense = {
//   affirmative: oneForAll('be'),
//   negative: oneForAll('be'),
//   get interrogative () {
//     return this.affirmative
//   }
// }

const presentPerfect: ITense = {
  affirmative: oneForAll('have'),
  negative: oneForAll(`haven't`),
  get interrogative () {
    return this.affirmative
  }
}

const pastPerfect: ITense = {
  affirmative: oneForAll('had'),
  negative: oneForAll(`hadn't`),
  get interrogative () {
    return this.affirmative
  }
}

const futurePerfect: ITense = {
  affirmative: oneForAll('have'),
  negative: oneForAll('have'),
  get interrogative () {
    return this.affirmative
  }
}

const futurePerfectContinuous: ITense = {
  affirmative: oneForAll('have'),
  negative: oneForAll('have'),
  get interrogative () {
    return this.affirmative
  }
}

export default {
  // presentPerfectContinuous,
  //
  // pastPerfectContinuous,
  //
  // futureContinuous,
  presentPerfect,
  presentPerfectContinuous,

  pastPerfect,
  pastPerfectContinuous,

  futurePerfect,
  futurePerfectContinuous
} as ITensesWithPhraseForms<IPronoun>
