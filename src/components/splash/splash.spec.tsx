import React from "react"
import renderer from "react-test-renderer"

import Splash from "./splash"
import { metaData } from "../../mock-data"

describe("<Splash />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Splash metaData={metaData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
