import React from "react"
import renderer from "react-test-renderer"

import SiteContainer from "./site-container"

describe("<SiteContainer />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SiteContainer>Child text</SiteContainer>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
