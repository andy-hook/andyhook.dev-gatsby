import React from "react"
import TitleCopyAside from "./title-copy-aside"
import { renderWithTheme } from "@test-utils"

describe("<TitleCopyAside />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <TitleCopyAside title="This is a title">
        This is child content
      </TitleCopyAside>
    )
    expect(tree).toMatchSnapshot()
  })
})
