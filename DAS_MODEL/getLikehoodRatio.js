const fs = require('fs')
const path = require('path')
const each = require('lodash/each')
const get = require('lodash/get')
const data = require('./meta/doubledIndexes.json')

const g = (entity, path) => get(entity, path, 0.000000001)

const getLHRatio = (doubledLocal, doubledGlobal, regularLocal, regularGlobal) =>
  Math.round((doubledLocal / doubledGlobal) / (regularLocal / regularGlobal) * 100) / 100

const byAmount = (path) => {
  const result = {}

  each(data[path], (localData, amount) => {
    const sylDoubled = g(localData, 'doubled')
    const dataDoubled = g(data, 'words.doubled')
    const sylRegular = g(localData, 'regular')
    const dataRegular = g(data, 'words.regular')
    result[amount] = getLHRatio(sylDoubled, dataDoubled, sylRegular, dataRegular)
  })

  return result
}

const consonantBeforeLastVowel = getLHRatio(
  data.consonantBeforeLastVowel.doubled,
  data.words.doubled,
  data.consonantBeforeLastVowel.regular,
  data.words.regular
)

fs.writeFileSync(path.resolve(__dirname, 'meta', './likehoodRatios.json'), JSON.stringify({
  bySyllables: byAmount('bySyllables'),
  byLength: byAmount('byLength'),
  consonantBeforeLastVowel,
  byRangeToTheEndOfTheWord: byAmount('byRangeToTheEndOfTheWord')
}, null, 2), function (err) {
  if (err) throw err
  console.log('Saved!')
})
