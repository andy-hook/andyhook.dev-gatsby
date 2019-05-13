import React from "react"
import renderer from "react-test-renderer"
import { transitionState } from "@mock-data"

import ContentScroll from "./content-scroll"

describe("<Logo />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ContentScroll transitionState={transitionState} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
