import React from "react"
import { shallowWithTheme } from "@test-utils"

import Social from "./social"
import { mockSocialIcons } from "@mock-data"

describe("<Social />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme("dark", <Social items={mockSocialIcons} />)
    expect(tree).toMatchSnapshot()
  })
})
