import getSecondForm from '../getSecondForm'
import { firstForm, secondForm } from '../../../DAS_MODEL/verbs'
var tensify = require('tensify')

firstForm.forEach((word: string, i: number) => {
  test(word, () => {
    expect(tensify(word).past).toBe(secondForm[i])
  })
})
