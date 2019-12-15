import React from "react"
import ProjectCard from "./project-card"
import { shallowWithTheme } from "@test-utils"
import { mockProjectsData } from "@data/mocks"

const { path, images } = mockProjectsData.brandwatch

describe("<ProjectCard />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <ProjectCard title="This is a title" path={path} images={images} />
    )
    expect(tree).toMatchSnapshot()
  })
})
