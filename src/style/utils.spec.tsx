import { createHsl, createHsla } from "./utils"

import "jest-styled-components"

describe("createHsl", () => {
  test("should return valid hsl string from provided value", () => {
    expect(createHsl("240,17%,2%")).toMatch("hsl(240,17%,2%)")
  })
})

describe("createHsla", () => {
  test("should return valid hsla string from provided value", () => {
    expect(createHsla("240,17%,2%", 50)).toMatch("hsla(240,17%,2%,50)")
  })
})
