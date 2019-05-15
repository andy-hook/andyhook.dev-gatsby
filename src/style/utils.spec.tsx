import { stripUnit } from "polished"
import { uniformScale } from "./utils"

describe("uniformScale", () => {
  test("Should return a viewport unit", () => {
    const out = stripUnit(uniformScale("100px", "topUltra"), true)[1]

    expect(out).toEqual("vw")
  })

  test("Should return correct value when supplied PX unit", () => {
    expect(uniformScale("10px", "topUltra")).toMatch("0.45454545454545453vw")
  })

  test("Should return correct value when supplied EM unit", () => {
    expect(uniformScale("10em", "topUltra")).toMatch("7.2727272727272725vw")
  })

  test("Should return correct value when supplied REM unit", () => {
    expect(uniformScale("10rem", "topUltra")).toMatch("7.2727272727272725vw")
  })
})
