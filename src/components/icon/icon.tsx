import { withPrefix } from "gatsby"
import React from "react"
import styled from "styled-components"

interface Props {
  name: "github" | "twitter" | "instagram" | "linkedin" | "dribbble"
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

const Icon = ({ name }: Props) => (
  <IconWrapper>
    <IconSvg className="icon">
      <use xlinkHref={withPrefix(`icon-sprite.svg#${name}`)} />
    </IconSvg>
  </IconWrapper>
)

export default Icon
