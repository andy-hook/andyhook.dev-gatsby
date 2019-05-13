import { withPrefix } from "gatsby"
import React, { memo } from "react"
import styled from "styled-components"
import classNames from "classnames"
import { TIcons } from "@custom-types/icons"

interface Props {
  name: TIcons
  className?: string
}

const IconWrapper = styled.div`
  width: 1em;
  height: 1em;
`

const IconSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
`

const Icon = memo(({ name, className }: Props) => (
  <IconWrapper className={classNames("", className)}>
    <IconSvg className="icon">
      <use xlinkHref={withPrefix(`icon-sprite.svg#${name}`)} />
    </IconSvg>
  </IconWrapper>
))

export default Icon