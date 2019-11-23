import React from "react"
import { shallowWithTheme } from "@test-utils"

import Hero from "./hero"

describe("<Hero />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
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
