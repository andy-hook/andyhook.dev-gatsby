import React from "react"
import renderer from "react-test-renderer"

import Social from "./social"

const mockItems = [
  {
    node: {
      label: "this is a label",
      url: "path/to/social/profile",
    },
  },
]

describe("<Social />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Social items={mockItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
