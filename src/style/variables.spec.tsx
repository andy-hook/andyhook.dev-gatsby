import {
  lightGrey,
  darkGrey,
  lightGreyAlpha,
  darkGreyAlpha,
  constructMaxMediaString,
  constructMinMediaString,
} from "./variables"

describe("constructMaxMediaString", () => {
  test("should return correctly formatted media string", () => {
    expect(constructMaxMediaString("100px")).toEqual("(max-width: 100px)")
  })
})

describe("constructMinMediaString", () => {
  test("should return correctly formatted media string", () => {
    expect(constructMinMediaString("100px")).toEqual("(min-width: 100px)")
  })
})

describe("lightGrey", () => {
  test("should return correct light grey value as hsl string", () => {
    expect(lightGrey(100)).toEqual("hsl(240, 3%, 100%)")
  })
})

describe("lightGreyAlpha", () => {
  test("should return correct light grey value as hsla string", () => {
    expect(lightGreyAlpha(100, 50)).toEqual("hsla(240, 3%, 100%,50)")
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
