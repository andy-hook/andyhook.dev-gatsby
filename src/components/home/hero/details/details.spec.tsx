import React from "react"
import { shallowWithTheme } from "@test-utils"

import Details from "./details"

describe("<Details />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Details buttonHref="https://www.google.com" />
    )
    expect(tree).toMatchSnapshot()
  })
})
