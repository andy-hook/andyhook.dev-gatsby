import React from "react"
import { shallowWithTheme } from "@test-utils"

import Hero from "./hero"
import { socialIcons, transitionState } from "@mock-data"

describe("<Hero />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Hero
        socialIconData={socialIcons}
        transitionState={transitionState}
        onAnimationComplete={jest.fn()}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
