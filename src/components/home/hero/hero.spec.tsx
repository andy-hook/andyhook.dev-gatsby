import React from "react"
import { shallowWithTheme } from "@test-utils"

import Hero from "./hero"
import { mockSocialIcons, mockTransitionState } from "@mock-data"

describe("<Hero />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Hero
        socialIconData={mockSocialIcons}
        transitionState={mockTransitionState}
        firstEntrance={true}
        loaderVisible={true}
        menuOpen={true}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
