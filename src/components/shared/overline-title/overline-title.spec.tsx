import React from "react"
import OverlineTitle from "./overline-title"
import { renderWithTheme } from "@test-utils"

describe("<OverlineTitle />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <OverlineTitle overline="Overline text">Title text</OverlineTitle>
    )
    expect(tree).toMatchSnapshot()
  })
})
