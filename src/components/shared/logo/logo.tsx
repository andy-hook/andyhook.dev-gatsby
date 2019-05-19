import React, { memo } from "react"
import styled from "styled-components"
import mark from "@images/svg-import/mark.svg"

interface Props {
  open?: boolean
}

const Logo: React.FunctionComponent<Props> = memo(({ open = false }) => {
  return <LogoMark open={open} />
})

const LogoMark = styled(mark)<Props>`
  transition: transform 0.3s ease;
  font-size: 1em;
  width: 1em;
  height: 1em;

  ${props => props.open && "transform: rotate(90deg)"};
`

export default Logo
