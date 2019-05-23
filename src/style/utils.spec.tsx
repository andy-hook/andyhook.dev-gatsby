import { stripUnit } from "polished"
import { uniformScale, createHsl, createHsla } from "./utils"

describe("uniformScale", () => {
  test("should return a viewport unit", () => {
    const out = stripUnit(uniformScale("100px", "topUltra"), true)[1]

    expect(out).toEqual("vw")
  })

  test("should return correct value when supplied PX unit", () => {
    expect(uniformScale("10px", "topUltra")).toMatch("0.45454545454545453vw")
  })

  test("should return correct value when supplied EM unit", () => {
    expect(uniformScale("10em", "topUltra")).toMatch("7.2727272727272725vw")
  })

  test("should return correct value when supplied REM unit", () => {
    expect(uniformScale("10rem", "topUltra")).toMatch("7.2727272727272725vw")
  })
})

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
