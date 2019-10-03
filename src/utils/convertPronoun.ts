export default (pronoun: string): string => {
  const map: { [key: string]: string } = {
    first: 'I',
    second: 'you',
    third: 'it',
    third_plural: 'they'
  }
  return map[pronoun]
}
