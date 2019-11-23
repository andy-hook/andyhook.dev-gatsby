import React, { memo, MutableRefObject } from "react"
import Navicon from "./navicon/navicon"
import Logo from "./logo/logo"
import { menuIsAnimating } from "@components/shared/menu/menu"
import NavList from "./nav-list/nav-list"
import SidebarSlide from "../sidebar-slide/sidebar-slide.container"
import * as S from "./topbar.style"

interface Props {
  open: boolean
  visible: boolean
  hasScrolled: boolean
  openMenu: () => void
  closeMenu: () => void
}

const Topbar: React.FunctionComponent<Props> = memo(
  ({ open, openMenu, closeMenu, visible, hasScrolled }) => {
    const overRef = React.useRef() as MutableRefObject<HTMLDivElement>
    const underRef = React.useRef() as MutableRefObject<HTMLDivElement>

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
      <>
        <S.Over ref={overRef} visible={visible}>
          <S.NaviconSizing>
            <Navicon open={open} onClick={toggleMenu} />
          </S.NaviconSizing>
        </S.Over>

        <S.Under ref={underRef} visible={visible}>
          <SidebarSlide>
            <S.ContainerInner
              hasScrolled={hasScrolled}
              open={open}
              visible={visible}
            >
              <S.LogoPos>
                <Logo hidden={open} />
              </S.LogoPos>

              <S.NavPos>
                <NavList hidden={open} />
              </S.NavPos>
            </S.ContainerInner>
          </SidebarSlide>
        </S.Under>
      </>
    )
  }
)

export default Topbar
