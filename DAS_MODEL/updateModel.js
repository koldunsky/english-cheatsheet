const fs = require('fs')
const path = require('path')
const firstForm = require('./data/firstForm.json')
const secondForm = require('./data/secondForm.json')

const updateDoubledIndexes = () => {
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

  fs.writeFileSync(path.resolve(__dirname, 'meta', './doubledIndexes.json'), JSON.stringify(doubledIndexes), function (err) {
    if (err) throw err
    console.log('Saved!')
  })
}

updateDoubledIndexes()
