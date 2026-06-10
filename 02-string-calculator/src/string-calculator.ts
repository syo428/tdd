//v1 Étape 1 - chaîne vide retourne 0
export function add(numbers: string): number {
  if (numbers === "") return 0

  throw new Error("Not implemented")
}

//Étape 2 - un nombre retourne lui-même

export function add2(numbers: string): number {
  if (numbers === "") return 0

  return Number(numbers)
}

