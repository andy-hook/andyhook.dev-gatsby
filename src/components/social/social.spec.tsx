import React from "react"
import renderer from "react-test-renderer"

import Social from "./social"
import { metaData } from "../../mock-data"

describe("<Social />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Social items={metaData.social} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
