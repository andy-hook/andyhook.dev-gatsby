import React from "react"
import { projectsData } from "@mock-data"

import NextProject from "./next-project"
import { shallowWithTheme } from "@test-utils"

describe("<NextProject />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <NextProject project={projectsData.brandwatch} />
    )
    expect(tree).toMatchSnapshot()
  })
})
