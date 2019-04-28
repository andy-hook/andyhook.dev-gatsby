import React from "react"
import renderer from "react-test-renderer"

import Splash from "./splash"
import { ISocialMeta } from "../../types/model"

const mockSocialData: ISocialMeta = {
  twitter: {
    label: "twitter",
    url: "path/to/social/profile",
  },
  instagram: {
    label: "instagram",
    url: "path/to/social/profile",
  },
  linkedin: {
    label: "linkedin",
    url: "path/to/social/profile",
  },
  dribbble: {
    label: "dribbble",
    url: "path/to/social/profile",
  },
  github: {
    label: "github",
    url: "path/to/social/profile",
  },
}

describe("<Splash />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Splash
          socialIconData={mockSocialData}
          buttonHref={mockSocialData.instagram.url}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
