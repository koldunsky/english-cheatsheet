import { getSecondForm } from '../verbConverter'

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
  'plowed'
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
  'plow'
]

firstForms.forEach((word: string, i: number) => {
  test(word, () => {
    expect(getSecondForm(word)).toBe(secondsForms[i])
  })
})
