import React from "react"
import ProjectListComponent from "./project-list"
import { shallowWithTheme } from "@test-utils"
import { mockProjectsData } from "@mock-data"

describe("<ProjectListComponent />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "light",
      <ProjectListComponent
        projectDataList={mockProjectsData}
        onClick={jest.fn()}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
