import React from "react"
import renderer from "react-test-renderer"

import Splash from "./splash"

describe("Social", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Splash />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
