import React from "react"
import renderer from "react-test-renderer"

import CardImage from "./card-image"
import { mockFluidImageObject } from "@data/mocks"

describe("<CardImage />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CardImage imageObject={mockFluidImageObject} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
