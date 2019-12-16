import React from "react"
import { mockProjectsData } from "@data/mocks"

import Work from "./work"
import { renderWithTheme } from "@test-utils"

describe("<Work />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Work projects={mockProjectsData} />)
    expect(tree).toMatchSnapshot()
  })
})
