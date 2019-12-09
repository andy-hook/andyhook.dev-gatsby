import React from "react"

import SplitText from "./split-text"
import { shallowWithTheme } from "@test-utils"

describe("<SplitText />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <SplitText visible={true}>This is test text</SplitText>
    )

    expect(tree).toMatchSnapshot()
  })
})
