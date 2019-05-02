import React from "react"
import renderer from "react-test-renderer"

import Hero from "./hero"
import { socialIcons } from "../../../mock-data"

describe("<Hero />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Hero socialIconData={socialIcons} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
