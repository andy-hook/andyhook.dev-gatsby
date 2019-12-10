import React from "react"

import MenuNavList from "./menu-nav-list"
import { shallowWithTheme } from "@test-utils"

describe("<MenuNavList />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "light",
      <MenuNavList onClick={jest.fn} open={true} />
    )
    expect(tree).toMatchSnapshot()
  })
})
