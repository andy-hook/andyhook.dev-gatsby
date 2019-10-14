import React from "react"
import { shallowWithTheme } from "@test-utils"

import NavList from "./nav-list"

describe("<Navigation />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme("dark", <NavList />)
    expect(tree).toMatchSnapshot()
  })
})
