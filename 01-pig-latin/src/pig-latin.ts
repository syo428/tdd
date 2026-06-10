export function pigLatin(word: string): string {
  const voyelles = "aeiou"

  if (voyelles.includes(word[0])) {
    return word + "ay"
  }

  let i = 0

  while (i < word.length && !voyelles.includes(word[i])) {
    i++
  }

  return word.slice(i) + word.slice(0, i) + "ay"
}