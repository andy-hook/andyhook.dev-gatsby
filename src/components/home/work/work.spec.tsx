import React from "react"
import renderer from "react-test-renderer"
import { projectsData } from "@mock-data"

import Work from "./work"

describe("<Work />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Work projectsData={projectsData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
