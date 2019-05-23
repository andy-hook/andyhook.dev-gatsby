import React from "react"
import { shallowWithTheme } from "@test-utils"

import Menu from "./menu"

describe("<Menu />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme("dark", <Menu />)
    expect(tree).toMatchSnapshot()
  })
})
