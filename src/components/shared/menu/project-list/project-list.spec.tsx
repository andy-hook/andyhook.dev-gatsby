import React from "react"
import ProjectList from "./project-list"
import { renderWithTheme } from "@test-utils"
import { mockProjectsData } from "@data/mocks"

describe("<ProjectList />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "light",
      <ProjectList projects={mockProjectsData} onClick={jest.fn} open={true} />
    )
    expect(tree).toMatchSnapshot()
  })
})
