import React from "react"
import { shallowWithTheme } from "@test-utils"
import { mockSocialIcons, mockProjectsData } from "@mock-data"

import Menu from "./menu"

describe("<Menu />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Menu
        projects={mockProjectsData}
        setMenuOpen={jest.fn()}
        social={mockSocialIcons}
        open={true}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
