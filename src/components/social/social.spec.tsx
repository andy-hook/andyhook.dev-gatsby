import React from "react"
import renderer from "react-test-renderer"

import Social from "./social"
import { SocialMeta } from "../../types/model"

const mockItems: SocialMeta = {
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

describe("<Social />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Social items={mockItems} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
