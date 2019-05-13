import React, { memo } from "react"
import Navicon from "@components/shared/navicon/navicon"
import styled from "styled-components"

interface Props {
  open?: boolean
}

const Topbar: React.FunctionComponent<Props> = memo(({ open }) => {
  return (
    <>
      <NaviconPos>
        <Navicon open={open} />
      </NaviconPos>
    </>
  )
})

const NaviconPos = styled.div`
  position: absolute;

  top: 50px;
  right: 50px;

  z-index: 100;
`

export default Topbar
