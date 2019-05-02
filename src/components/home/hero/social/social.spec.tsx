import React from "react"
import renderer from "react-test-renderer"

import Social from "./social"
import { socialIcons } from "../../../../mock-data"

describe("<Social />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Social items={socialIcons} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
