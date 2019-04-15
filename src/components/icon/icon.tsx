import { withPrefix } from "gatsby"
import React from "react"
import styled from "styled-components"
import classNames from "classnames"

interface Props {
  name: string
  className: string
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

const Icon = ({ name, className }: Props) => (
  <IconWrapper className={classNames("", className)}>
    <IconSvg className="icon">
      <use xlinkHref={withPrefix(`icon-sprite.svg#${name}`)} />
    </IconSvg>
  </IconWrapper>
)

export default Icon
