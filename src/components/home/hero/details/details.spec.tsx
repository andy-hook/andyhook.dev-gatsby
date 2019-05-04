import React from "react"
import renderer from "react-test-renderer"

import Details from "./details"

describe("<Details />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Details buttonHref="https://www.google.com" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
