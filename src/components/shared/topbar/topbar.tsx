import React, { memo } from "react"
import Navicon from "@components/shared/navicon/navicon"
import Logo from "@components/shared/logo/logo"
import styled from "styled-components"

interface Props {
  open?: boolean
  onMenuOpen: () => void
  onMenuClose: () => void
}

const Topbar: React.FunctionComponent<Props> = memo(
  ({ open, onMenuOpen, onMenuClose }) => {
    const toggleMenu = () => {
      if (open) {
        onMenuClose()
      } else {
        onMenuOpen()
      }
    }

    return (
      <>
        <LogoPos>
          <Logo />
        </LogoPos>
        <NaviconPos>
          <Navicon open={open} onClick={toggleMenu} />
        </NaviconPos>
      </>
    )
  }
)

const LogoPos = styled.div`
  position: absolute;

  top: 50px;
  left: 50px;

  z-index: 100;
`

const NaviconPos = styled.div`
  position: absolute;

  top: 50px;
  right: 50px;

  z-index: 100;
`

export default Topbar
