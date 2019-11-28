import React from "react"
import ProjectList from "./project-list"
import { shallowWithTheme } from "@test-utils"
import { mockProjectsData } from "@mock-data"

describe("<ProjectList />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "light",
      <ProjectList projects={mockProjectsData} onClick={jest.fn} open={true} />
    )
    expect(tree).toMatchSnapshot()
  })
})
