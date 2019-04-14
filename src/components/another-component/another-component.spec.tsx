import React from "react"
import renderer from "react-test-renderer"

import AnotherComponent from "./another-component"

describe("AnotherComponent", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<AnotherComponent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
