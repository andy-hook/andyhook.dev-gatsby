import React from "react"
import renderer from "react-test-renderer"

import AboutHero from "./about-hero"
import { mockFluidImageObject } from "@data/mocks"

describe("<AboutHero />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<AboutHero imageObject={mockFluidImageObject} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
