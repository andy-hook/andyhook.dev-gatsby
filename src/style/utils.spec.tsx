import { createHsl, createHsla, createCubicBezier } from "./utils"

import "jest-styled-components"

describe("createHsl", () => {
  test("should return valid hsl css string from provided value", () => {
    expect(createHsl("240,17%,2%")).toMatch("hsl(240,17%,2%)")
  })
})

describe("createHsla", () => {
  test("should return valid hsla css string from provided value", () => {
    expect(createHsla("240,17%,2%", 50)).toMatch("hsla(240,17%,2%,50)")
  })
})

describe("createCubicBezier", () => {
  test("should return valid cubic-bezier css string from provided values", () => {
    expect(createCubicBezier([0.55, 0.085, 0.68, 0.53])).toMatch(
      "cubic-bezier(0.55,0.085,0.68,0.53)"
    )
  })
})
