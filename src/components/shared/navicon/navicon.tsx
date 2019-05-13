import React, { memo } from "react"
import styled from "styled-components"

interface Props {
  open?: boolean
}

const Navicon: React.FunctionComponent<Props> = memo(({ open }) => {
  return <NaviconContainer>yeeeep {" " + open}</NaviconContainer>
})

const NaviconContainer = styled.div`
  background-color: red;

  width: 50px;
  height: 50px;
`

export default Navicon
