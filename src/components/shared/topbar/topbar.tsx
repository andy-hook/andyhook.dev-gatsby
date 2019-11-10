import React, { memo } from "react"
import Navicon from "./navicon/navicon"
import Logo from "./logo/logo"
import { menuIsAnimating } from "@components/shared/menu/menu"
import NavList from "./nav-list/nav-list"
import SidebarSlide from "../sidebar-slide/sidebar-slide.container"
import * as S from "./topbar.style"

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
      <S.Container>
        <S.Over>
          <S.NaviconSizing>
            <Navicon open={open} onClick={toggleMenu} />
          </S.NaviconSizing>
        </S.Over>

        <S.Under>
          <SidebarSlide>
            <S.ContainerInner>
              <S.LogoPos>
                <Logo hidden={open} />
              </S.LogoPos>

              <S.NavPos>
                <NavList hidden={open} />
              </S.NavPos>
            </S.ContainerInner>
          </SidebarSlide>
        </S.Under>
      </S.Container>
    )
  }
)

export default Topbar
