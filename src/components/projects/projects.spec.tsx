import React from "react"

import Projects from "./projects"
import { shallowWithTheme } from "@test-utils"

describe("<Projects />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme("dark", <Projects />)
    expect(tree).toMatchSnapshot()
  })
})
