import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "@style/theme"

import Topbar from "./topbar"

describe("<Topbar />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkTheme}>
          <Topbar onMenuOpen={jest.fn()} onMenuClose={jest.fn()} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
