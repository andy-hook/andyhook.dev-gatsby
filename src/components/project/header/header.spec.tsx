import React from "react"
import { mockProjectsData } from "@data/mocks"

import Header from "./header"
import { shallowWithTheme } from "@test-utils"

describe("<Header />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Header project={mockProjectsData.brandwatch} />
    )
    expect(tree).toMatchSnapshot()
  })
})
