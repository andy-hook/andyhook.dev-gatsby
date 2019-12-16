import React from "react"
import ProjectCard from "./project-card"
import { renderWithTheme } from "@test-utils"
import { mockProjectsData } from "@data/mocks"

jest.mock(
  "@components/shared/card-image/card-image.container",
  () => "CardImageContainer"
)

const { path, images } = mockProjectsData.brandwatch

describe("<ProjectCard />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <ProjectCard title="This is a title" path={path} images={images} />
    )
    expect(tree).toMatchSnapshot()
  })
})
