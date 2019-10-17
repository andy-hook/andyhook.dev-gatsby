import React from "react"
import { projectsData } from "@mock-data"

import Work from "./work"
import { shallowWithTheme } from "@test-utils"

describe("<Work />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme("dark", <Work projectsData={projectsData} />)
    expect(tree).toMatchSnapshot()
  })
})
