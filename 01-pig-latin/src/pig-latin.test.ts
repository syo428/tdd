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

Deno.test("pig devient igpay", () => {
  assertEquals(pigLatin("pig"), "igpay")
})

Deno.test("latin devient atinlay", () => {
  assertEquals(pigLatin("latin"), "atinlay")
})

Deno.test("school devient oolschay", () => {
  assertEquals(pigLatin("school"), "oolschay")
})