import React from "react"
import renderer from "react-test-renderer"

import Splash from "./splash"

const mockSocialData = [
  {
    node: {
      label: "twitter",
      url: "http://www.google.com",
    },
  },
  {
    node: {
      label: "linkedin",
      url: "http://www.google.com",
    },
  },
]

describe("<Splash />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Splash
          socialIconData={mockSocialData}
          buttonHref={mockSocialData[0].node.url}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
