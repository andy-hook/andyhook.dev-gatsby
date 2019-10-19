import React from "react"
import OverlineTitle from "./overline-title"
import { shallowWithTheme } from "@test-utils"

describe("<OverlineTitle />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <OverlineTitle overline="Overline text">Title text</OverlineTitle>
    )
    expect(tree).toMatchSnapshot()
  })
})
