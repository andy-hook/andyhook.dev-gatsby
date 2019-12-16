import React from "react"
import { renderWithTheme } from "@test-utils"

import Hero from "./hero"

jest.mock("@hooks/page-transition")

describe("<Hero />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <Hero
        buttonHref={"Test string"}
        firstEntrance={true}
        loaderVisible={true}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
