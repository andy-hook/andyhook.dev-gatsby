import React from "react"
import renderer from "react-test-renderer"

import Hero from "./hero"
import { socialIcons, transitionState } from "@mock-data"

describe("<Hero />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Hero socialIconData={socialIcons} transitionState={transitionState} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})