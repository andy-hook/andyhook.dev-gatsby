import React from "react"

import { storiesOf } from "@storybook/react"
import Loader from "./loader"

storiesOf("Loader", module)
  .add("Default", () => <Loader />)
  .add("Visible", () => <Loader visible={true} />)
  .add("Hidden", () => <Loader visible={false} />)
