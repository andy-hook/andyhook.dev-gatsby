import React from "react"

import { storiesOf } from "@storybook/react"
import Social from "./social"
import { socialIcons } from "../../mock-data"
import { themes } from "@storybook/theming"

storiesOf("Social", module)
  .addParameters({ options: { theme: themes.dark } })
  .add("with text", () => <Social items={socialIcons} />)
