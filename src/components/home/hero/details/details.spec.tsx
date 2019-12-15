import React from "react"
import { renderWithTheme } from "@test-utils"

import Details from "./details"

describe("<Details />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <Details
        buttonHref="https://www.google.com"
        visible={true}
        animate={false}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
