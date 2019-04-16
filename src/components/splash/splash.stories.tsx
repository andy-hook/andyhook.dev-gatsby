import React from "react"

import { storiesOf } from "@storybook/react"
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

storiesOf("Splash", module).add("with text", () => (
  <Splash socialIconData={mockSocialData} />
))
