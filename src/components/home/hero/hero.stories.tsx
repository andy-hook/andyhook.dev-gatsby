import React from "react"

import { storiesOf } from "@storybook/react"
import Hero from "./hero"
import { mockSocialIcons, transitionState } from "@mock-data"

storiesOf("Hero", module).add("with text", () => (
  <Hero
    socialIconData={mockSocialIcons}
    transitionState={transitionState}
    firstEntrance={true}
    loaderVisible={true}
    menuOpen={false}
  />
))
