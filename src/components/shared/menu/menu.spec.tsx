import React from "react"
import { shallowWithTheme } from "@test-utils"
import { socialIcons, projectsData } from "@mock-data"

import Menu from "./menu"

describe("<Menu />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <Menu
        projects={projectsData}
        setMenuOpen={jest.fn()}
        social={socialIcons}
        firstEntrance={true}
        open={true}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
