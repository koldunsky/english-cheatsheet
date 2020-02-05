const fs = require('fs')
const path = require('path')
const lodash = require('lodash')

const firstForm = require('./data/firstForm.json')
const secondForm = require('./data/secondForm.json')

const isVowel = (char) => {
  if (!char) {
    console.info(char)
    console.trace()
  }

  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())
}

const countVowels = (verb) => {
  return verb.split('').reduce((acc, char) => {
    if (isVowel(char)) {
      acc++
    }

    return acc
  }, 0)
}

const getDoubledIndexes = () => {
  const doubledIndexes = []

  firstForm.forEach((word, index) => {
    const secondFormWord = secondForm[index]
    let firstIsDoubled = false
    let secondIsDoubled = false

    word.split('').forEach((char, i, arr) => {
      if (char === arr[i + 1]) {
        firstIsDoubled = true
      }
    })
    secondFormWord.split('').forEach((char, i, arr) => {
      if (char === arr[i + 1]) {
        secondIsDoubled = true
      }
    })

    if (!firstIsDoubled && secondIsDoubled) {
      doubledIndexes.push(index)
    }
  })

  return doubledIndexes
}

const wordsWithDoubledConsonantIndexes = getDoubledIndexes()
const wordsWithDoubledConsonantAmount = wordsWithDoubledConsonantIndexes.length

const getBySyllable = () => {
  const bySyllable = {}
  firstForm.forEach((word, i) => {
    const amountKey = countVowels(word)
    if (!bySyllable[amountKey]) {
      bySyllable[amountKey] = {}
    }
    const type = wordsWithDoubledConsonantIndexes.includes(i) ? 'doubled' : 'regular'

    if (!bySyllable[amountKey][type]) {
      bySyllable[amountKey][type] = 0
    }

    bySyllable[amountKey][type]++
  })
  return bySyllable
}

fs.writeFileSync(path.resolve(__dirname, 'meta', './doubledIndexes.json'), JSON.stringify({
  wordsWithDoubledConsonant: {
    indexes: wordsWithDoubledConsonantIndexes,
    amount: wordsWithDoubledConsonantAmount
  },
  allWords: {
    amount: firstForm.length
  },
  bySyllables: getBySyllable()
}), function (err) {
  if (err) throw err
  console.log('Saved!')
})
