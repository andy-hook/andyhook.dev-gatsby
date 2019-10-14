import React from "react"
import { shallowWithTheme } from "@test-utils"

import Logo from "./logo"

describe("<Logo />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme("dark", <Logo />)
    expect(tree).toMatchSnapshot()
  })
})
