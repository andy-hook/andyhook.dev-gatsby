import React from "react"

import { storiesOf } from "@storybook/react"
import Social from "./social"
import { SocialMeta } from "../../types/model"

const items: SocialMeta = {
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

storiesOf("Social", module).add("with text", () => <Social items={items} />)
