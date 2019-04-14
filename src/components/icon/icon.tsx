import { withPrefix } from "gatsby"
import React from "react"

const Icon = () => (
  <div>
    <svg className="icon">
      <use xlinkHref={withPrefix("icon-sprite.svg#github")} />
    </svg>
  </div>
)

export default Icon
