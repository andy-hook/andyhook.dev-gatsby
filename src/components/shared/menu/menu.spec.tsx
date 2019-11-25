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
        social={mockSocialIcons}
        open={true}
        dispatchCloseMenuAction={jest.fn}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
