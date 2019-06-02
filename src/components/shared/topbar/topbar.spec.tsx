import React from "react"
import { shallowWithTheme } from "@test-utils"

import Topbar from "./topbar"

describe("<Topbar />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Topbar
        openMenu={jest.fn()}
        closeMenu={jest.fn()}
        theme="primary-theme"
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
