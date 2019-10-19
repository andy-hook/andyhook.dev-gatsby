import React from "react"
import Footer from "./footer"
import { shallowWithTheme } from "@test-utils"

describe("<Footer />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme("dark", <Footer />)
    expect(tree).toMatchSnapshot()
  })
})
