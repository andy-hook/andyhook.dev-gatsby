import React from "react"
import renderer from "react-test-renderer"

import Splash from "./splash"
import { socialIcons } from "../../../mock-data"

describe("<Splash />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Splash socialIconData={socialIcons} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
