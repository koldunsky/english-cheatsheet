import getSecondForm from '../getSecondForm'

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
  'sail'
]
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
  'sailed'
]

firstForms.forEach((word: string, i: number) => {
  test(word, () => {
    expect(getSecondForm(word)).toBe(secondsForms[i])
  })
})