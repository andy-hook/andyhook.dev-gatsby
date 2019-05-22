import React from "react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "@style/theme"

import Hero from "./hero"
import { socialIcons, transitionState } from "@mock-data"

describe("<Hero />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={darkTheme}>
          <Hero
            socialIconData={socialIcons}
            transitionState={transitionState}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
