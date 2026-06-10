import { assertEquals } from "jsr:@std/assert"
import { add, add2, add3 } from "./string-calculator.ts"

//Étape 1 - chaîne vide retourne 0 (red)
Deno.test("empty string returns 0", () => {
  assertEquals(add(""), 0)
})

//Étape 2 - un nombre retourne lui-même (red)

Deno.test("single number returns itself", () => {
  assertEquals(add2("1"), 1)
})

//Étape 3 - deux nombres séparés par une virgule (red)

Deno.test("two numbers separated by comma", () => {
 assertEquals(add3("1,2"), 3)
})

//Étape 4 - plusieurs nombres (red)
Deno.test("multiple numbers", () => {
 assertEquals(add("1,2,3,4"), 10)
})

//Étape 5 - retour à la ligne accepté comme séparateur
Deno.test("new lines are valid separators", () => {
 assertEquals(add("1\n2,3"), 6)
})




