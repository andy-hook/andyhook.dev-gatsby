import React from "react"
import { shallowWithTheme } from "@test-utils"

import Date from "./date"

describe("<Date />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme("dark", <Date />)
    expect(tree).toMatchSnapshot()
  })
})
