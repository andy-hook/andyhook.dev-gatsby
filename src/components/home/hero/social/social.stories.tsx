import React from "react"

import { storiesOf } from "@storybook/react"
import Social from "./social"
import { mockSocialIcons } from "@mock-data"

storiesOf("Social", module).add("with text", () => (
  <Social items={mockSocialIcons} />
))
