import React, { memo } from "react"
import styled from "styled-components"

interface Props {
  onClick: () => void
}

const ThemeSwitch: React.FunctionComponent<Props> = memo(({ onClick }) => {
  return <SwitchButton onClick={onClick} />
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
