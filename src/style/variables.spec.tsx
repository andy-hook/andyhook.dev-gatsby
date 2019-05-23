import { lightGrey, darkGrey, lightGreyAlpha, darkGreyAlpha } from "./variables"

describe("lightGrey", () => {
  test("should return correct light grey value as hsl string", () => {
    expect(lightGrey(100)).toEqual("hsl(240, 2%, 100%)")
  })
})

describe("lightGreyAlpha", () => {
  test("should return correct light grey value as hsla string", () => {
    expect(lightGreyAlpha(100, 50)).toEqual("hsla(240, 2%, 100%,50)")
  })
})

describe("darkGrey", () => {
  test("should return correct dark grey value as hsl string", () => {
    expect(darkGrey(100)).toEqual("hsl(240, 17%, 2%)")
  })
})

describe("darkGreyAlpha", () => {
  test("should return correct dark grey value as hsla string", () => {
    expect(darkGreyAlpha(100, 50)).toEqual("hsla(240, 17%, 2%,50)")
  })
})
