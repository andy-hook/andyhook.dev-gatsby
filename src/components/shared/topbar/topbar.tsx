import React, { memo } from "react"
import Navicon from "./navicon/navicon"
import Logo from "./logo/logo"
import styled from "styled-components"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"
import { zIndex } from "@style/variables"
import { menuIsAnimating } from "@components/shared/menu/menu"
import NavList from "./nav-list/nav-list"

interface Props {
  open?: boolean
  openMenu: () => void
  closeMenu: () => void
}

const Topbar: React.FunctionComponent<Props> = memo(
  ({ open, openMenu, closeMenu }) => {
    const toggleMenu = () => {
      if (menuIsAnimating) {
        return
      }
      if (open) {
        closeMenu()
      } else {
        openMenu()
      }
    }

    return (
      <Container>
        <StyledLogo inverted={open} />

        <NavPos>
          <NavList />
          <StyledNavicon open={open} onClick={toggleMenu} />
        </NavPos>
      </Container>
    )
  }
)

const Container = styled.div`
  position: fixed;
  z-index: ${zIndex.highest};

  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 50px;

  border-bottom: 1px solid white;
`

const StyledLogo = styled(Logo)`
  font-size: ${rem("55px")};

  ${scaleBetween(
    "font-size",
    rem("55px"),
    rem("70px"),
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", rem("70px"), "topUltra")}
`

const NavPos = styled.div`
  z-index: ${zIndex.highest};
  display: flex;

  align-items: center;
`

const StyledNavicon = styled(Navicon)`
  font-size: ${rem("48px")};

  ${scaleBetween(
    "font-size",
    rem("48px"),
    rem("60px"),
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", rem("60px"), "topUltra")}
`

export default Topbar
