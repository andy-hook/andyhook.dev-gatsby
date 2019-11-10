import React, { memo } from "react"
import Navicon from "./navicon/navicon"
import Logo from "./logo/logo"
import styled, { css } from "styled-components"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan, mq } from "@style/media-queries"
import { zIndex } from "@style/variables"
import { menuIsAnimating } from "@components/shared/menu/menu"
import NavList from "./nav-list/nav-list"
import { typeSizeBaseXs } from "@style/typography"
import SidebarSlide from "../sidebar-slide/sidebar-slide.container"

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
        <Over>
          <NaviconSizing>
            <Navicon open={open} onClick={toggleMenu} />
          </NaviconSizing>
        </Over>

        <Under>
          <SidebarSlide>
            <ContainerInner>
              <LogoPos>
                <Logo hidden={open} />
              </LogoPos>

              <NavPos>
                <NavList hidden={open} />
              </NavPos>
            </ContainerInner>
          </SidebarSlide>
        </Under>
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
`

const spacingXSmall = rem("25px")
const spacingXBig = rem("45px")

const paddingX = css`
  padding-left: ${spacingXSmall};
  padding-right: ${spacingXSmall};

  ${scaleBetween(
    "padding-left",
    spacingXSmall,
    spacingXBig,
    "topThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-right",
    spacingXSmall,
    spacingXBig,
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("padding-left", spacingXBig, "topUltra")}
  ${scaleGreaterThan("padding-right", spacingXBig, "topUltra")}
`

const Over = styled.div`
  ${paddingX}

  position: absolute;
  display: flex;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  align-items: center;

  justify-content: flex-end;

  z-index: ${zIndex.low};

  pointer-events: none;

  ${mq.greaterThan("bottomPalm")`
    justify-content: flex-start;
  `}
`

const Under = styled.div`
  position: relative;

  z-index: ${zIndex.floor};
`

const spacingYSmall = rem("15px")
const spacingYBig = rem("27px")

const ContainerInner = styled.div`
  ${paddingX}

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: ${spacingYSmall};
  padding-bottom: ${spacingYSmall};

  ${scaleBetween(
    "padding-top",
    spacingYSmall,
    spacingYBig,
    "topThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-bottom",
    spacingYSmall,
    spacingYBig,
    "topThumb",
    "bottomUltra"
  )}
  
  ${scaleGreaterThan("padding-top", spacingYBig, "topUltra")}
  ${scaleGreaterThan("padding-bottom", spacingYBig, "topUltra")}
  
`

const LogoPos = styled.div`
  font-size: ${rem("65px")};

  ${mq.greaterThan("bottomPalm")`
    margin-left: 0.75em;
  `}

  ${scaleBetween(
    "font-size",
    rem("65px"),
    rem("85px"),
    "topThumb",
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

  pointer-events: auto;

  ${mq.greaterThan("bottomPalm")`
    margin-left: -1.25em;
  `}
`

export default Topbar
