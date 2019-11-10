import React from "react"
import renderer from "react-test-renderer"

import SidebarSlide from "./sidebar-slide"

describe("<SidebarSlide />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SidebarSlide>Child text</SidebarSlide>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
