import React from "react"
import { shallowWithTheme } from "@test-utils"

import Hero from "./hero"
import { socialIcons, transitionState } from "@mock-data"

describe("<Hero />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      <Hero socialIconData={socialIcons} transitionState={transitionState} />
    )
    expect(tree).toMatchSnapshot()
  })
})
