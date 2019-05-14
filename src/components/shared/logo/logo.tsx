import React, { memo } from "react"
import styled from "styled-components"
import mark from "@images/svg-import/mark.svg"

const Logo: React.FunctionComponent = memo(() => {
  return <LogoMark />
})

const LogoMark = styled(mark)`
  font-size: 4.5em;
  width: 1em;
  height: 1em;
`

export default Logo
