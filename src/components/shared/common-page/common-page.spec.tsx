import React from "react"
import CommonPage from "./common-page"
import { shallowWithTheme } from "@test-utils"

describe("<CommonPage />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <CommonPage overline="Overline text">Title text</CommonPage>
    )
    expect(tree).toMatchSnapshot()
  })
})
