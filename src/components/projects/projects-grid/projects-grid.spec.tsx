import React from "react"
import ProjectsGrid from "./projects-grid"
import { shallowWithTheme } from "@test-utils"
import { mockProjectsData } from "@mock-data"

describe("<ProjectsGrid />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <ProjectsGrid projects={mockProjectsData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
