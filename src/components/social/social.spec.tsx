import React from "react"
import renderer from "react-test-renderer"

import Social from "./social"

const mockItems = [
  {
    node: {
      label: "twitter",
      url: "https://twitter.com/andy_hook",
    },
  },
]

describe("<Social />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Social items={mockItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
