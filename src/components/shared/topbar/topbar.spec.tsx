import React from "react"
import renderer from "react-test-renderer"

import Topbar from "./topbar"

describe("<Topbar />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Topbar onMenuOpen={jest.fn()} onMenuClose={jest.fn()} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
