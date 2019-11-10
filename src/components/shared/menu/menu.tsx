import React, { memo } from "react"
import { Ref } from "@custom-types/ref"
import { ISocialMeta, TProjects } from "model"
import { TweenMax, Expo } from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"
import ProjectListComponent from "./project-list/project-list"
import { useMediaQueryContext } from "../media-query-provider/media-query-provider"
import * as S from "./menu.style"
import Social from "./social/social"

interface Props {
  open: boolean
  onScrimClick: () => void
}

interface DataProps {
  social: ISocialMeta
  projects: TProjects
}

type AllProps = Props & DataProps

export let menuIsAnimating = false
let routeTransition = false

const Menu: React.FunctionComponent<AllProps> = memo(
  ({ open, projects, social, onScrimClick }) => {
    const backboardRef = React.useRef() as Ref
    const contentsRef = React.useRef() as Ref
    const containerRef = React.useRef() as Ref
    const animationScrim = React.useRef() as Ref
    const { topPalm } = useMediaQueryContext()

    const closeMenu = () => {
      if (!menuIsAnimating) {
        onScrimClick()
      }
    }

    const animateOpen = () => {
      menuIsAnimating = true

      TweenMax.set(containerRef.current, { visibility: "visible" })

      // Backboard
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
          },
        }
      )

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

      // Scrim
      TweenMax.to(animationScrim.current, 0.25, {
        opacity: 0.5,
      })
    }

    const animateClose = () => {
      menuIsAnimating = true

      // Backboard
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
            routeTransition = false
            menuIsAnimating = false

            TweenMax.set(containerRef.current, { clearProps: "visibility" })
          },
        }
      )

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

      // Scrim
      TweenMax.to(animationScrim.current, 1, {
        opacity: 0,
        clearProps: "opacity",
      })
    }

    const animateRouteClose = () => {
      animateClose()
    }

    useDeferredRunEffect(() => {
      open
        ? animateOpen()
        : routeTransition
        ? animateRouteClose()
        : animateClose()
    }, [open])

    const handleProjectClick = () => {
      routeTransition = true
    }

    return (
      <S.Fixer ref={containerRef}>
        <S.Container>
          <S.Sidebar>
            <S.Contents ref={contentsRef}>
              <ProjectListComponent
                projectDataList={projects}
                onClick={handleProjectClick}
              />
              <Social items={social} />
            </S.Contents>

            <S.MenuBackboard ref={backboardRef} />
          </S.Sidebar>
        </S.Container>

        <S.AnimationScrim ref={animationScrim} onClick={closeMenu} />
      </S.Fixer>
    )
  }
)

export default Menu
