import React from "react"
import { projectsData } from "@mock-data"

import Header from "./header"
import { shallowWithTheme } from "@test-utils"

describe("<Header />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Header project={projectsData.brandwatch} />
    )
    expect(tree).toMatchSnapshot()
  })
})
