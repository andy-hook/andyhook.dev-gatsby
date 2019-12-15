import React from "react"
import { mockProjectsData } from "@mock-data"

import Work from "./work"
import { shallowWithTheme } from "@test-utils"

describe("<Work />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme("dark", <Work projects={mockProjectsData} />)
    expect(tree).toMatchSnapshot()
  })
})
