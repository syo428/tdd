import { assertEquals } from "jsr:@std/assert"
import { pigLatin } from "./pig-latin.ts"

Deno.test("apple devient appleay", () => {
  assertEquals(pigLatin("apple"), "appleay")
})