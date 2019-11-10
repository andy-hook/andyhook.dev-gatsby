import React from "react"

import About from "./about"
import { shallowWithTheme } from "@test-utils"

describe("<About />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme("dark", <About />)
    expect(tree).toMatchSnapshot()
  })
})
