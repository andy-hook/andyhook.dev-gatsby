import React from "react"
import { shallowWithTheme } from "@test-utils"

import Social from "./social"
import { socialIcons } from "@mock-data"

describe("<Social />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme("dark", <Social items={socialIcons} />)
    expect(tree).toMatchSnapshot()
  })
})
