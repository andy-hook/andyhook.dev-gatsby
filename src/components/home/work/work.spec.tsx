import React from "react"
import { mockProjectsData } from "@data/mocks"

import Work from "./work"
import { renderWithTheme } from "@test-utils"

jest.mock("@hooks/page-transition")

jest.mock(
  "@components/shared/projects-grid/projects-grid.container",
  () => "ProjectsGridContainer"
)

describe("<Work />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Work projects={mockProjectsData} />)
    expect(tree).toMatchSnapshot()
  })
})
