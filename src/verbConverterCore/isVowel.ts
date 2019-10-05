export default (char: string): boolean => {
  if (!char) {
    console.trace()
  }

  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())
}
