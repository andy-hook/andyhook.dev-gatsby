import React, { memo } from "react"
import Navicon from "./navicon/navicon"
import Logo from "./logo/logo"
import styled from "styled-components"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"
import { zIndex } from "@style/variables"
import { menuIsAnimating } from "@components/shared/menu/menu"
import NavList from "./nav-list/nav-list"
import { typeSizeBaseXs } from "@style/typography"

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
        <LogoPos>
          <Logo hidden={open} />
        </LogoPos>

        <NavPos>
          <NavList hidden={open} />
          <NaviconSizing>
            <Navicon open={open} onClick={toggleMenu} />
          </NaviconSizing>
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

  padding-top: ${rem("5px")};
  padding-bottom: ${rem("5px")};
  padding-left: ${rem("15px")};
  padding-right: ${rem("15px")};

  ${scaleBetween(
    "padding-top",
    rem("5px"),
    rem("15px"),
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-bottom",
    rem("5px"),
    rem("15px"),
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-left",
    rem("25px"),
    rem("45px"),
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-right",
    rem("25px"),
    rem("45px"),
    "bottomThumb",
    "bottomUltra"
  )}
  
  ${scaleGreaterThan("padding-top", rem("15px"), "topUltra")}
  ${scaleGreaterThan("padding-bottom", rem("15px"), "topUltra")}
  ${scaleGreaterThan("padding-left", rem("45px"), "topUltra")}
  ${scaleGreaterThan("padding-right", rem("45px"), "topUltra")}
`

const LogoPos = styled.div`
  font-size: ${rem("65px")};

  ${scaleBetween(
    "font-size",
    rem("65px"),
    rem("85px"),
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", rem("85px"), "topUltra")}
`

const NavPos = styled.div`
  z-index: ${zIndex.highest};
  display: flex;

  align-items: center;
`

const NaviconSizing = styled.div`
  /* Align scaling with navigation text */
  ${typeSizeBaseXs}

  margin-right: -1.25em;
`

export default Topbar
