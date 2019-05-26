import React, { memo } from "react"
import Navicon from "@components/shared/navicon/navicon"
import Logo from "@components/shared/logo/logo"
import styled, { css } from "styled-components"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan } from "@style/utils"
import { zIndex } from "@style/variables"
import Link from "gatsby-plugin-transition-link"

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
        <LogoLink
          to="/"
          entry={{
            delay: 0,
            length: 0,
            state: {
              animType: "enter-from-project",
            },
          }}
          exit={{
            delay: 0,
            length: 0,
            state: {
              animType: "exit animation",
            },
          }}
        >
          <Logo open={open} />
        </LogoLink>
        <NaviconPos>
          <Navicon open={open} onClick={toggleMenu} />
        </NaviconPos>
      </>
    )
  }
)

const clearance = "1em"

const commonStyles = css`
  position: absolute;

  top: ${clearance};

  z-index: ${zIndex.highest};
`

const LogoLink = styled(Link)`
  ${commonStyles}

  left: ${clearance};

  margin-top: -0.2em;
  margin-left: -0.2em;

  font-size: ${rem("66px")};

  ${scaleBetween(
    "font-size",
    rem("66px"),
    rem("70px"),
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", rem("70px"), "topUltra")}
`

const NaviconPos = styled.div`
  ${commonStyles}

  right: ${clearance};

  font-size: ${rem("55px")};

  ${scaleBetween(
    "font-size",
    rem("55px"),
    rem("60px"),
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", rem("60px"), "topUltra")}
`

export default Topbar
