import React, { memo } from "react"
import Navicon from "@components/shared/navicon/navicon"
import Logo from "@components/shared/logo/logo"
import styled from "styled-components"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"
import { zIndex } from "@style/variables"
import Link from "gatsby-plugin-transition-link"
import { menuIsAnimating } from "@components/shared/menu/menu"
import NavList from "@components/shared/nav/nav-list"

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

    const logoReturnAnimation = open ? "enter-from-nav" : "enter-from-project"

    return (
      <Container>
        <LogoLink
          to="/"
          entry={{
            length: 0.5,
            state: {
              animType: logoReturnAnimation,
            },
          }}
          exit={{
            length: 0.5,
            state: {
              animType: "exit-to-home",
            },
          }}
        >
          <Logo open={open} />
        </LogoLink>

        <Menu>
          <NavList />
          <StyledNavicon open={open} onClick={toggleMenu} />
        </Menu>
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

  padding: 50px;

  border-bottom: 1px solid white;
`

const LogoLink = styled(Link)`
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

const Menu = styled.div`
  z-index: ${zIndex.highest};
  display: flex;
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
