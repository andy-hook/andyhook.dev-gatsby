import React from "react"
import { projectsData } from "@mock-data"

import Contents from "./contents"
import { shallowWithTheme } from "@test-utils"

describe("<Contents />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Contents sections={projectsData.brandwatch.contents} />
    )
    expect(tree).toMatchSnapshot()
  })
})
