import React from "react"
import renderer from "react-test-renderer"

import Card from "./card"

const props = {
  label: "Card label",
  desc: "Card description",
  path: "/brandwatch",
}

describe("<Work />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Card {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})