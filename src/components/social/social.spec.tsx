import React from "react"
import renderer from "react-test-renderer"

import Social from "./social"

describe("Social", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Social />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
