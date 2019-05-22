import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "@style/theme"

import Details from "./details"

describe("<Details />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkTheme}>
          <Details buttonHref="https://www.google.com" />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
