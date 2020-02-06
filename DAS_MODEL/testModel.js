const firstForm = require('./data/firstFormShort')
const secondForm = require('./data/secondFormShort')
const data = require('./meta/wordStats')
const like = require('./meta/likehoodRatios')
const utils = require('./updateModel')
const updateLHRatios = require('./updateModel').update

utils.update()
updateLHRatios()

const initialProbability = 1 / 10

firstForm.forEach((word, index) => {
  const canLog = data.words.doubledIndexes.includes(index)
  canLog && console.info('==========')
  let probability = initialProbability
  canLog && console.info('byLength', probability, '*', like.byLength[word.length], '=')
  probability = probability * like.byLength[word.length]
  canLog && console.info(probability)
  canLog && console.info('bySyllables', probability, '*', like.bySyllables[utils.getLastVowelIndex(word)], '=')
  probability = probability * like.bySyllables[utils.getLastVowelIndex(word)]
  canLog && console.info(probability)
  canLog && console.info('getLastVowelIndex',
    probability, '*', like.byRangeToTheEndOfTheWord[word.length - utils.getLastVowelIndex(word)], '=')
  probability = probability * like.byRangeToTheEndOfTheWord[word.length - utils.getLastVowelIndex(word)]
  canLog && console.info(probability)
  canLog && console.info(data.words.doubledIndexes.includes(index) ? '✅' : '😬', word, secondForm[index], probability)
})
