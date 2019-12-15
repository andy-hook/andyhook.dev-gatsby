import React from "react"
import ProjectsGrid from "./projects-grid"
import { renderWithTheme } from "@test-utils"
import { mockProjectsData } from "@data/mocks"

jest.mock("@components/shared/card-image/card-image.container")

describe("<ProjectsGrid />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <ProjectsGrid projects={mockProjectsData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
