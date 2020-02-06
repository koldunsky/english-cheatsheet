const firstForm = require('./data/firstForm.json')
const secondForm = require('./data/secondForm.json')
const data = require('./meta/wordStats')
const like = require('./meta/likehoodRatios')
const utils = require('./updateModel')

const initialProbability = 1 / 10

firstForm.forEach((word, index) => {
  console.info('==========')
  let probability = initialProbability
  probability = probability * like.byLength[word.length]
  console.info(probability)
  probability = probability * like.bySyllables[utils.getLastVowelIndex(word)]
  console.info(probability)
  // probability = probability * like.byRangeToTheEndOfTheWord[word.length - utils.getLastVowelIndex(word)]
  // console.info(probability)
  console.info(data.words.doubledIndexes.includes(index) ? '✅' : '😬', word, secondForm[index], probability)
})
