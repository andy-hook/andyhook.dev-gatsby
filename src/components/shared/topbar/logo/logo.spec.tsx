import React from "react"
import { renderWithTheme } from "@test-utils"

import Logo from "./logo"

describe("<Logo />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Logo />)
    expect(tree).toMatchSnapshot()
  })
})
