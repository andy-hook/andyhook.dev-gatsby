import React from "react"

import Projects from "./projects"
import { renderWithTheme } from "@test-utils"

jest.mock("@hooks/page-transition")

jest.mock(
  "@components/shared/projects-grid/projects-grid.container",
  () => "ProjectsGridContainer"
)

describe("<Projects />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Projects />)
    expect(tree).toMatchSnapshot()
  })
})
