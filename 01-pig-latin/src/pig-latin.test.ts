import { assertEquals } from "jsr:@std/assert"
import { pigLatin } from "./pig-latin.ts"

Deno.test("apple devient appleay", () => {
  assertEquals(pigLatin("apple"), "appleay")
})

Deno.test("ear devient earay", () => {
  assertEquals(pigLatin("ear"), "earay")
})

Deno.test("igloo devient iglooay", () => {
  assertEquals(pigLatin("igloo"), "iglooay")
})