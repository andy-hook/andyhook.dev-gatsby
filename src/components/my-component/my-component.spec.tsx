import React from "react"
import renderer from "react-test-renderer"

import MyComponent from "./my-component"

describe("MyComponent", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<MyComponent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
