import React from "react"
import { shallowWithTheme } from "@test-utils"

import Hero from "./hero"
import { mockSocialIcons } from "@mock-data"

describe("<Hero />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Hero
        socialIconData={mockSocialIcons}
        firstEntrance={true}
        loaderVisible={true}
        menuOpen={true}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
