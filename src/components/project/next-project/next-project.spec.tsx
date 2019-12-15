import React from "react"
import { mockProjectsData } from "@data/mocks"

import NextProject from "./next-project"
import { shallowWithTheme } from "@test-utils"

describe("<NextProject />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <NextProject
        nextProjectItem={mockProjectsData.brandwatch}
        onProjectChange={jest.fn}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
