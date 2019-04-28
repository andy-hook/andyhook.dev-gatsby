import React from "react"

import { storiesOf } from "@storybook/react"
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

storiesOf("Splash", module).add("with text", () => (
  <Splash
    socialIconData={mockSocialData}
    buttonHref={mockSocialData.dribbble.url}
  />
))
