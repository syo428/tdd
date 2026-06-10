export function pigLatin(word: string): string {
  const voyelles = "aeiou"

  if (voyelles.includes(word[0])) {
    return word + "ay"
  }

  return word.slice(1) + word[0] + "ay"
}