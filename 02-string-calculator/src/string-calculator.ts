//v1 Étape 1 - chaîne vide retourne 0 (green)
export function add(numbers: string): number {
  if (numbers === "") return 0

  throw new Error("Not implemented")
}

//Étape 2 - un nombre retourne lui-même (green)

export function add2(numbers: string): number {
  if (numbers === "") return 0

  return Number(numbers)
}

//Étape 3 - deux nombres séparés par une virgule (green)
export function add3(numbers: string): number {
 if (numbers === "") return 0

 const values = numbers.split(",")

 return values.reduce((sum, value) => sum + Number(value), 0)
}
//Étape 4 - plusieurs nombres (green)
export function add4(numbers: string): number {
 if (numbers === "") return 0

 const values = numbers.split(",")

 return values.reduce((sum, value) => sum + Number(value), 0)
}

//Étape 5 - retour à la ligne accepté comme séparateur
export function add5(numbers: string): number {
 if (numbers === "") return 0

 const values = numbers
   .replaceAll("\n", ",")
   .split(",")

 return values.reduce((sum, value) => sum + Number(value), 0)
}

