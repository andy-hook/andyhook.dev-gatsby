import React from "react"
import { mockProjectsData } from "@data/mocks"

import NextProject from "./next-project"
import { renderWithTheme } from "@test-utils"

describe("<NextProject />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <NextProject
        nextProjectItem={mockProjectsData.brandwatch}
        onProjectChange={jest.fn}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
