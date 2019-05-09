import React from "react"
import renderer from "react-test-renderer"

import Button from "./button"

describe("<Logo />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Button href="https://www.google.com" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
