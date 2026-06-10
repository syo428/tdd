import { assertEquals } from "jsr:@std/assert"
import { add } from "./string-calculator.ts"

//Étape 1 - chaîne vide retourne 0
Deno.test("empty string returns 0", () => {
  assertEquals(add(""), 0)
})

//Étape 2 - un nombre retourne lui-même

Deno.test("single number returns itself", () => {
  assertEquals(add("1"), 1)
})