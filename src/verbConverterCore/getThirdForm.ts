import irregularVerbs from '@/verbConverterCore/irregularVerbsList'
import getRegularVerbPastForm from '@/verbConverterCore/getRegularVerbPastForm'

export default (verb: string): string => {
  if (!verb) {
    return ''
  }

  let index = irregularVerbs.first.indexOf(verb)

  if (index !== -1) {
    return irregularVerbs.third[index]
  }

  return getRegularVerbPastForm(verb)
}
