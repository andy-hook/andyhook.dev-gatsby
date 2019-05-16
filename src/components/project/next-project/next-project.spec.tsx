import React from "react"
import renderer from "react-test-renderer"
import { projectsData } from "@mock-data"

import NextProject from "./next-project"

describe("<NextProject />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<NextProject project={projectsData.brandwatch} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
