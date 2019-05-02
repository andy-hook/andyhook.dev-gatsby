import React from "react"

import { storiesOf } from "@storybook/react"
import Splash from "./splash"
import { socialIcons } from "../../../mock-data"

storiesOf("Splash", module).add("with text", () => (
  <Splash socialIconData={socialIcons} />
))
