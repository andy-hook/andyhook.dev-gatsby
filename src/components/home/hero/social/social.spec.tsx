import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "@style/theme"

import Social from "./social"
import { socialIcons } from "@mock-data"

describe("<Social />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkTheme}>
          <Social items={socialIcons} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
