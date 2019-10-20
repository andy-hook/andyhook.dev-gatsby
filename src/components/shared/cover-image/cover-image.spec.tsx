import React from "react"
import renderer from "react-test-renderer"

import CoverImage from "./cover-image"
import { fluidImageObject } from "@mock-data"

describe("<CoverImage />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CoverImage imageObject={fluidImageObject} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
