import React from "react"

import { storiesOf } from "@storybook/react"
import MyComponent from "./my-component"

storiesOf("MyComponent", module).add("with text", () => <MyComponent />)
