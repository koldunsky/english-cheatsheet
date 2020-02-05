const each = require('lodash/each')
const data = require('./meta/doubledIndexes.json')

each(data.bySyllables, (sylData, amount) => {
  const sylDoubled = sylData.doubled || 0.000000001
  const dataDoubled = data.words.doubled || 0.000000001
  const sylRegular = sylData.regular || 0.000000001
  const dataRegular = data.words.regular || 0.000000001
  console.log(amount, ':  ', Math.round((sylDoubled / dataDoubled) / (sylRegular / dataRegular) * 100) / 100)
})
