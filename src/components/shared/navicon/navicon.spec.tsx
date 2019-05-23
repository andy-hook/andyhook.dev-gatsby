import React from "react"
import { shallowWithTheme } from "@test-utils"

import Navicon from "./navicon"

describe("<Navicon />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme("dark", <Navicon onClick={jest.fn()} />)
    expect(tree).toMatchSnapshot()
  })
})
