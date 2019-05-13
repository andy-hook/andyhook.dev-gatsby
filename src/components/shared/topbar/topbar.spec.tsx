import React from "react"
import renderer from "react-test-renderer"

import Topbar from "./Topbar"

describe("<Topbar />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Topbar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
