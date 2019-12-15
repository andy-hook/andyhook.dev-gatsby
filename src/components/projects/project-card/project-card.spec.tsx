import React from "react"
import ProjectCard from "./project-card"
import { shallowWithTheme } from "@test-utils"

describe("<ProjectCard />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <ProjectCard title="This is a title" />
    )
    expect(tree).toMatchSnapshot()
  })
})
