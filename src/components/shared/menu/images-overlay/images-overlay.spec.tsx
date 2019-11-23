import React from "react"
import ImagesOverlay from "./images-overlay"
import { shallowWithTheme } from "@test-utils"
import { mockProjectsData } from "@mock-data"

describe("<ImagesOverlay />", () => {
  it("renders correctly", () => {
    const tree = shallowWithTheme(
      "dark",
      <ImagesOverlay projectDataList={mockProjectsData} activeIndex={0} />
    )
    expect(tree).toMatchSnapshot()
  })
})
