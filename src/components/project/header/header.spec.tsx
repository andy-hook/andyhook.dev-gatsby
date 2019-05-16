import React from "react"
import renderer from "react-test-renderer"
import { projectsData } from "@mock-data"

import Header from "./header"

describe("<Header />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header project={projectsData.brandwatch} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
