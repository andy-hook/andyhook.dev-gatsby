import React from "react"
import { socialIcons } from "@mock-data"

import SocialListComponent from "./social-list"
import { shallowWithTheme } from "@test-utils"

describe("SocialListComponent", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "light",
      <SocialListComponent socialDataList={socialIcons} />
    )
    expect(tree).toMatchSnapshot()
  })
})
