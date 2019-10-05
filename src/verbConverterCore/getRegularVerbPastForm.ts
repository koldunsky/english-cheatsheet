import irregularVerbs from '@/verbConverterCore/irregularVerbsList'
import isVowel from '@/verbConverterCore/isVowel'
import last from 'lodash/last'
import { lastShortVowel } from '@/utils/verbConverter'

export default (verb: string): string => {
  if (irregularVerbs.first.includes(verb)) {
    console.warn(verb, 'is irregular verb, to convert verb use `getThirdForm` or `getSecondForm` instead')
    return '*see console*'
  }

  const lastChar = verb.charAt(verb.length - 1)

  if (lastChar === 'e') {
    return `${verb}d`
  }

  if (lastChar === 'y' && !isVowel(verb.charAt(verb.length - 2))) {
    return `${verb.slice(0, -1)}ied`
  }

  if (lastChar === 'l') {
    return `${verb}led`
  }

  if (lastShortVowel(verb)) {
    const lastChar = last(verb.split(''))
    return `${verb}${lastChar}ed`
  }

  return `${verb}ed`
}
