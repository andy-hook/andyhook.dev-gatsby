import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "@style/theme"

import Navicon from "./navicon"

describe("<Navicon />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkTheme}>
          <Navicon onClick={jest.fn()} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
