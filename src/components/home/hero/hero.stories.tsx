import React from "react"

import { storiesOf } from "@storybook/react"
import Hero from "./hero"
import { socialIcons, transitionState } from "@mock-data"

const animationComplete = () => {
  alert("Switched theme")
}

storiesOf("Hero", module).add("with text", () => (
  <Hero
    socialIconData={socialIcons}
    transitionState={transitionState}
    switchThemeForElements={animationComplete}
  />
))
