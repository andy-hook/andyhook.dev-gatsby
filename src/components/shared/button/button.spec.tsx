import React from "react"

import Button from "./button"
import { shallowWithTheme } from "@test-utils"

describe("<Button />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Button href="https://www.google.com">This is a button</Button>
    )

    expect(tree).toMatchSnapshot()
  })
})
