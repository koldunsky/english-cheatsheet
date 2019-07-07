import irregularVerbs from './irregularVerbs'

export const isVowel = (char) => ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) >= 0

export const isShortVowel = (char) => ['i', 'o', 'u'].indexOf(char.toLowerCase()) >= 0

export const getSecondForm = (verb) => {
  let index = irregularVerbs.first.indexOf(verb)
  const lastChar = verb.charAt(verb.length - 1)

  if (index !== -1) {
    return irregularVerbs.second[i]
  } else {
    return ''
  }

  if (lastChar === 'e') {
    return `${verb}d`
  }

  if (lastChar === 'y' && !isVowel(verb.charAt(verb.length - 2))) {
    return `${verb.slice(0, -1)}ied`
  }

  if (lastChar === 'l') {
    return `${verb}led`
  }
}

export const getGerund = (verb) => `${verb}ing`

export const getThirdForm = (verb) => {
  return verb
}

export default (verb) => ({
  presentSimple: verb,
  presentContinuous: getGerund(verb),
  presentPerfect: getThirdForm()
})
