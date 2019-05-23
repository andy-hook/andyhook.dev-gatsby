import React from "react"
import renderer from "react-test-renderer"

import ThemeSwitch from "./theme-switch"

describe("<ThemeSwitch />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ThemeSwitch onClick={jest.fn()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
