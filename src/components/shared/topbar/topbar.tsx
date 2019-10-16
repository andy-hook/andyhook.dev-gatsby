import React, { memo } from "react"
import Navicon from "./navicon/navicon"
import Logo from "./logo/logo"
import styled from "styled-components"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"
import { zIndex, borderThickness } from "@style/variables"
import { menuIsAnimating } from "@components/shared/menu/menu"
import NavList from "./nav-list/nav-list"
import { themeTone } from "@style/theme"
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
        <StyledLogo inverted={open} />

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

  padding-top: ${rem("10px")};
  padding-bottom: ${rem("10px")};
  padding-left: ${rem("15px")};
  padding-right: ${rem("15px")};

  ${scaleBetween(
    "padding-top",
    rem("10px"),
    rem("15px"),
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-bottom",
    rem("10px"),
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

  border-bottom: ${borderThickness.regular} solid ${themeTone(300)};
`

const StyledLogo = styled(Logo)`
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
`

export default Topbar
