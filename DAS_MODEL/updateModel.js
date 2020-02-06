const findLastIndex = require('lodash/findLastIndex')

const fs = require('fs')
const path = require('path')

const firstForm = require('./data/firstFormShort')
const secondForm = require('./data/secondFormShort')

// UTILS
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

const getLastVowelIndex = (verb) => {
  return findLastIndex(verb.split(''), isVowel)
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

const getByLength = () => {
  const byLength = {}

  firstForm.forEach((word, i) => {
    const amountKey = word.length
    if (!byLength[amountKey]) {
      byLength[amountKey] = {}
    }
    const type = wordsWithDoubledConsonantIndexes.includes(i) ? 'doubled' : 'regular'

    if (!byLength[amountKey][type]) {
      byLength[amountKey][type] = 0
    }

    byLength[amountKey][type]++
  })

  return byLength
}

const getByRangeToTheEnd = () => {
  const byRange = {}

  firstForm.forEach((word, i) => {
    const lastVowelIndex = getLastVowelIndex(word)
    const amountKey = (word.length - lastVowelIndex)
    if (!byRange[amountKey]) {
      byRange[amountKey] = {}
    }

    const type = wordsWithDoubledConsonantIndexes.includes(i) ? 'doubled' : 'regular'

    if (!byRange[amountKey][type]) {
      byRange[amountKey][type] = 0
    }

    byRange[amountKey][type]++
  })

  return byRange
}

const getIsPreviousIsConsonant = () => {
  const stat = {
    regular: 0,
    doubled: 0
  }
  firstForm.forEach((word, i) => {
    const lastVowelIndex = getLastVowelIndex(word)
    const charBefore = word[lastVowelIndex - 1]
    const charBeforeIsConsonant = charBefore && !isVowel(charBefore)
    const charAfter = word[lastVowelIndex + 1]
    const charAfterIsConsonant = charAfter && !isVowel(charAfter)

    if (charBeforeIsConsonant && charAfterIsConsonant) {
      wordsWithDoubledConsonantIndexes[i] ? stat.doubled++ : stat.regular++
    }
  })

  return stat
}
const update = () => {
  fs.writeFileSync(path.resolve(__dirname, 'meta', './wordStats.json'), JSON.stringify({
    words: {
      doubled: wordsWithDoubledConsonantAmount,
      doubledIndexes: wordsWithDoubledConsonantIndexes,
      regular: firstForm.length - wordsWithDoubledConsonantAmount,
      amount: firstForm.length
    },
    bySyllables: getBySyllable(),
    consonantBeforeLastVowel: getIsPreviousIsConsonant(),
    byLength: getByLength(),
    byRangeToTheEndOfTheWord: getByRangeToTheEnd()
  }, null, 2), function (err) {
    if (err) throw err
    console.log('Saved!')
  })
}

update()

module.exports = {
  isVowel,
  countVowels,
  getLastVowelIndex,
  update
}


const azaza = () => {
  const newArr = []
  const newArr2 = []
  firstForm.forEach((verb, i) => {
    const lastChar = verb.charAt(verb.length - 1)
    if (lastChar === 'e' || (lastChar === 'y' && !isVowel(verb.charAt(verb.length - 2)))) {
      console.info(11)
    } else {
      newArr.push(verb)
      newArr2.push(secondForm[i])
    }
  })
  fs.writeFileSync(path.resolve(__dirname, 'data', './firstFormShort.json'), JSON.stringify(newArr, null, 2), function (err) {
    if (err) throw err
    console.log('Saved!')
  })
  fs.writeFileSync(path.resolve(__dirname, 'data', './secondFormShort.json'), JSON.stringify(newArr2, null, 2), function (err) {
    if (err) throw err
    console.log('Saved!')
  })
}
azaza()
