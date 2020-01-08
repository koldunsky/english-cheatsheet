import { ITensesWithPhraseForms, IPhraseForms } from '@/types'
import { IPronoun } from './getAuxiliary'

interface ITense extends IPhraseForms<IPronoun> {}

const oneForAll = (word: string): IPronoun => ({
  first: word,
  second: word,
  third: word,
  third_plural: word
})
//
// const presentPerfectContinuous: ITense = {
//   affirmative: oneForAll('been'),
//   get negative () {
//     return this.affirmative
//   },
//   get interrogative () {
//     return this.affirmative
//   }
// }
//
// const pastPerfectContinuous: ITense = {
//   affirmative: oneForAll('been'),
//   negative: oneForAll('been'),
//   get interrogative () {
//     return this.affirmative
//   }
// }
//
// const futureContinuous: ITense = {
//   affirmative: oneForAll('be'),
//   negative: oneForAll('be'),
//   get interrogative () {
//     return this.affirmative
//   }
// }

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
  futurePerfect,
  futurePerfectContinuous
} as ITensesWithPhraseForms<IPronoun>
