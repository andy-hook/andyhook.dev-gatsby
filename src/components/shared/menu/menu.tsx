import React, { memo, MutableRefObject } from "react"
import { SocialMeta, Projects } from "model"
import { TweenMax, Expo } from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"
import ProjectListComponent from "./project-list/project-list"
import { useMediaQueryContext } from "../media-query-provider/media-query-provider"
import * as S from "./menu.style"
import Social from "./social/social"
import MenuNavList from "./menu-nav-list/menu-nav-list"

interface Props {
  open: boolean
  dispatchCloseMenuAction: () => void
}

interface DataProps {
  social: SocialMeta
  projects: Projects
}

type AllProps = Props & DataProps

export let menuIsAnimating = false
export let menuIsRouteTransitioning = false

const Menu: React.FunctionComponent<AllProps> = memo(
  ({ open, projects, social, dispatchCloseMenuAction }) => {
    const backboardRef = React.useRef() as MutableRefObject<HTMLDivElement>
    const contentsRef = React.useRef() as MutableRefObject<HTMLDivElement>
    const containerRef = React.useRef() as MutableRefObject<HTMLDivElement>
    const animationScrim = React.useRef() as MutableRefObject<HTMLDivElement>
    const { topPalm } = useMediaQueryContext()

    const handleScrimClick = () => {
      if (!menuIsAnimating) {
        dispatchCloseMenuAction()
      }
    }

    const animateBackboardOpen = (onComplete?: () => void) => {
      TweenMax.fromTo(
        backboardRef.current,
        0.75,
        {
          opacity: 1,
          x: topPalm ? "-100%" : "100%",
        },
        {
          ease: Expo.easeOut,
          x: "0%",
          onComplete: () => {
            menuIsAnimating = false

            if (onComplete) {
              onComplete()
            }
          },
        }
      )

      // Scrim
      TweenMax.to(animationScrim.current, 0.25, {
        opacity: 0.75,
      })
    }

    const animateBackboardClose = (onComplete?: () => void) => {
      TweenMax.fromTo(
        backboardRef.current,
        0.75,
        {
          x: "0%",
        },
        {
          ease: Expo.easeOut,
          x: topPalm ? "-100%" : "100%",
          clearProps: "transform, opacity",
          onComplete: () => {
            menuIsAnimating = false

            TweenMax.set(containerRef.current, { clearProps: "visibility" })

            if (onComplete) {
              onComplete()
            }
          },
        }
      )

      // Scrim
      TweenMax.to(animationScrim.current, 1, {
        opacity: 0,
        clearProps: "opacity",
      })
    }

    const animateOpen = () => {
      menuIsAnimating = true

      TweenMax.set(containerRef.current, { visibility: "visible" })

      // Backboard
      animateBackboardOpen()

      // Contents
      TweenMax.fromTo(
        contentsRef.current,
        0.25,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
    }

    const animateClose = () => {
      menuIsAnimating = true

      // Backboard
      animateBackboardClose()

      // Contents
      TweenMax.fromTo(
        contentsRef.current,
        0.25,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      )
    }

    useDeferredRunEffect(() => {
      open ? animateOpen() : animateClose()
    }, [open])

    return (
      <S.Fixer ref={containerRef}>
        <S.Container>
          <S.Sidebar>
            <S.Contents ref={contentsRef}>
              <S.SidebarNav>
                <S.SidebarNavInner>
                  <ProjectListComponent
                    projectDataList={projects}
                    onClick={dispatchCloseMenuAction}
                  />

                  <MenuNavList onClick={dispatchCloseMenuAction} />
                </S.SidebarNavInner>
              </S.SidebarNav>

              <S.SocialContainer>
                <Social items={social} />
              </S.SocialContainer>
            </S.Contents>

            <S.MenuBackboard ref={backboardRef} />
          </S.Sidebar>
        </S.Container>

        <S.AnimationScrim ref={animationScrim} onClick={handleScrimClick} />
      </S.Fixer>
    )
  }
)

export default Menu
