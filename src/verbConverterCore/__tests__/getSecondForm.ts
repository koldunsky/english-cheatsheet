import getSecondForm from '../getSecondForm'
var tensify = require('tensify')

const firstForms = [
  'beg',
  'blur',
  'flip',
  'plan',
  'stop',
  'thin',
  'rub',
  'split',
  'step',
  'stir',
  'swim',
  'tap',
  'wrap',
  'fix',
  'play',
  'plow',
  'sail'
]

const secondsForms = [
  'begged',
  'blurred',
  'flipped',
  'planned',
  'stopped',
  'thinned',
  'rubbed',
  'split',
  'stepped',
  'stirred',
  'swam',
  'tapped',
  'wrapped',
  'fixed',
  'played',
  'plowed',
  'sailed'
]

firstForms.forEach((word: string, i: number) => {
  test(word, () => {
    expect(tensify(word).past).toBe(secondsForms[i])
  })
})
