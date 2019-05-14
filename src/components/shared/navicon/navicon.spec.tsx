import React from "react"
import renderer from "react-test-renderer"

import Navicon from "./navicon"

describe("<Navicon />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Navicon onClick={jest.fn()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
