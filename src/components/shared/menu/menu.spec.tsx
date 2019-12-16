import React from "react"
import { renderWithTheme } from "@test-utils"
import { mockSocialIcons, mockProjectsData } from "@data/mocks"

import Menu from "./menu"

describe("<Menu />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
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
