import React from "react"
import renderer from "react-test-renderer"

import CoverImage from "./cover-image"
import { mockFluidImageObject } from "@mock-data"

describe("<CoverImage />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CoverImage imageObject={mockFluidImageObject} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
