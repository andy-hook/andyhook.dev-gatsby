import { keys } from "./utils"

describe("keys", () => {
  const inObject = {
    first: "",
    second: "",
    third: "",
  }

  const outArray = ["first", "second", "third"]

  it("returns an array of matching object keys", () => {
    expect(keys(inObject)).toEqual(outArray)
  })
})
