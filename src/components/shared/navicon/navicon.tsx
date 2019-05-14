import React, { memo } from "react"
import styled from "styled-components"

interface Props {
  open?: boolean
  onClick: () => void
}

const Navicon: React.FunctionComponent<Props> = memo(({ open, onClick }) => {
  return (
    <NaviconContainer onClick={onClick}>yeeeep {" " + open}</NaviconContainer>
  )
})

const NaviconContainer = styled.div`
  background-color: red;

  width: 50px;
  height: 50px;
`

export default Navicon
