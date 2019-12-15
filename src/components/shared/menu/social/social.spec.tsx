import React from "react"
import { shallowWithTheme } from "@test-utils"

import Social from "./social"
import { mockSocialIcons } from "@data/mocks"

describe("<Social />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Social items={mockSocialIcons} open={true} />
    )
    expect(tree).toMatchSnapshot()
  })
})
