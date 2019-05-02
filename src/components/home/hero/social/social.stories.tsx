import React from "react"

import { storiesOf } from "@storybook/react"
import Social from "./social"
import { socialIcons } from "../../../../mock-data"

storiesOf("Social", module).add("with text", () => (
  <Social items={socialIcons} />
))
