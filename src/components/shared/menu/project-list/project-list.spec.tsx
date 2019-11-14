import React from "react"
import ProjectList from "./project-list"
import { shallowWithTheme } from "@test-utils"
import { mockProjectsData } from "@mock-data"

describe("<ProjectList />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "light",
      <ProjectList projectDataList={mockProjectsData} onClick={jest.fn} />
    )
    expect(tree).toMatchSnapshot()
  })
})
