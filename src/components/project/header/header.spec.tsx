import React from "react"
import { mockProjectsData } from "@data/mocks"

import Header from "./header"
import { renderWithTheme } from "@test-utils"

jest.mock(
  "@components/shared/cover-image/cover-image.container",
  () => "CoverImageContainer"
)

describe("<Header />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <Header project={mockProjectsData.brandwatch} />
    )
    expect(tree).toMatchSnapshot()
  })
})
