import React, { memo } from "react"
import styled from "styled-components"

const ThemeSwitch: React.FunctionComponent = memo(() => {
  return <SwitchButton />
})

const SwitchButton = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 20px;
  height: 20px;

  background-color: grey;
`

export default ThemeSwitch
