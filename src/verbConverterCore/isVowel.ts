export default (char: string): boolean => {
  if (!char) {
    console.info(char)
    console.trace()
  }

  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())
}
