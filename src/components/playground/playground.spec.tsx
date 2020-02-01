import React from "react"

import Playground from "./playground"
import { renderWithTheme } from "@test-utils"

jest.mock("@hooks/page-transition")

describe("<Playground />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Playground />)
    expect(tree).toMatchSnapshot()
  })
})
