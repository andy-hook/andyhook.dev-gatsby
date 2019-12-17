import React from "react"

import About from "./about"
import { renderWithTheme } from "@test-utils"

jest.mock("@hooks/page-transition")
jest.mock("./about-hero/about-hero.container", () => "AboutHeroContainer")

describe("<About />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <About />)
    expect(tree).toMatchSnapshot()
  })
})
