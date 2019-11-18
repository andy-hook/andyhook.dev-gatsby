import React, { memo } from "react"
import Navicon from "./navicon/navicon"
import Logo from "./logo/logo"
import { menuIsAnimating } from "@components/shared/menu/menu"
import NavList from "./nav-list/nav-list"
import SidebarSlide from "../sidebar-slide/sidebar-slide.container"
import * as S from "./topbar.style"
import useDeferredRunEffect from "@hooks/deferred-run"
import { Ref } from "@custom-types/ref"
import { TweenMax, Expo } from "gsap"

interface Props {
  open?: boolean
  visible?: boolean
  openMenu: () => void
  closeMenu: () => void
}

const Topbar: React.FunctionComponent<Props> = memo(
  ({ open, openMenu, closeMenu, visible }) => {
    const overRef = React.useRef() as Ref
    const underRef = React.useRef() as Ref

    const animateHide = () => {
      const animProps = {
        ease: Expo.easeOut,
        y: "-100%",
      }

      TweenMax.to(overRef.current, 0.75, animProps)
      TweenMax.to(underRef.current, 0.75, animProps)
    }

    const animateShow = () => {
      const animProps = {
        ease: Expo.easeOut,
        y: "0%",
      }

      TweenMax.to(overRef.current, 0.75, animProps)
      TweenMax.to(underRef.current, 0.75, animProps)
    }

    useDeferredRunEffect(() => {
      visible ? animateShow() : animateHide()
    }, [visible])

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
        <S.Over ref={overRef}>
          <S.NaviconSizing>
            <Navicon open={open} onClick={toggleMenu} />
          </S.NaviconSizing>
        </S.Over>

        <S.Under ref={underRef}>
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
      </>
    )
  }
)

export default Topbar
