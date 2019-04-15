import React from "react"

import { storiesOf } from "@storybook/react"
import Social from "./social"

const items = [
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

storiesOf("Social", module).add("with text", () => <Social items={items} />)
