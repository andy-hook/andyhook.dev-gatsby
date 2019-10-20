import React from "react"
import { mockProjectsData } from "@mock-data"

import Contents from "./contents"
import { shallowWithTheme } from "@test-utils"

describe("<Contents />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Contents sections={mockProjectsData.brandwatch.contents} />
    )
    expect(tree).toMatchSnapshot()
  })
})
