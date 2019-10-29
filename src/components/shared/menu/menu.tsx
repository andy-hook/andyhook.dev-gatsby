import React, { memo } from "react"
import styled from "styled-components"
import { Ref } from "@custom-types/ref"
import { zIndex, darkGrey } from "@style/variables"
import { themeTone } from "@style/theme"
import Gutter from "@components/shared/gutter/gutter"
import { typeSupTitle, typeSizeBaseXs } from "@style/typography"
import { ISocialMeta, TProjects } from "model"
import { mq, scaleBetween } from "@style/media-queries"
import { TweenMax, Expo } from "gsap"
import { IStore } from "store"
import useDeferredRunEffect from "@hooks/deferred-run"
import SocialListComponent from "./social-list/social-list"
import ProjectListComponent from "./project-list/project-list"

interface Props {
  open: boolean
  setMenuOpen: (isOpen: IStore["menuOpen"]) => void
}

export interface DispatchProps {
  setMenuOpen: (isOpen: IStore["menuOpen"]) => void
}

interface DataProps {
  social: ISocialMeta
  projects: TProjects
}

type AllProps = Props & DataProps

export let menuIsAnimating = false
let routeTransition = false

const Menu: React.FunctionComponent<AllProps> = memo(
  ({ open, projects, social }) => {
    const backboardRef = React.useRef() as Ref
    const contentsRef = React.useRef() as Ref
    const containerRef = React.useRef() as Ref
    const animationScrim = React.useRef() as Ref

    const animateOpen = () => {
      menuIsAnimating = true

      TweenMax.set(containerRef.current, { visibility: "visible" })

      // Backboard
      TweenMax.fromTo(
        backboardRef.current,
        0.75,
        {
          opacity: 1,
          y: "-100%",
        },
        {
          ease: Expo.easeOut,
          y: "0%",
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
        opacity: 1,
      })
    }

    const animateClose = () => {
      menuIsAnimating = true

      // Backboard
      TweenMax.fromTo(
        backboardRef.current,
        0.75,
        {
          y: "0%",
        },
        {
          ease: Expo.easeOut,
          y: "100%",
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
      <Fixer ref={containerRef}>
        <Container>
          <Gutter>
            <MenuContents ref={contentsRef}>
              {/* Projects */}
              <div>
                <ListTitle>
                  <ListTitleNumber>01</ListTitleNumber>
                  <ListTitleDivider />
                  Projects
                </ListTitle>
                <ProjectListComponent
                  projectDataList={projects}
                  onClick={handleProjectClick}
                />
              </div>
              {/* Social */}
              <div>
                <ListTitle>
                  <ListTitleNumber>02</ListTitleNumber>
                  <ListTitleDivider />
                  Connect
                </ListTitle>
                <SocialListComponent socialDataList={social} />
              </div>
            </MenuContents>
          </Gutter>
        </Container>

        <MenuBackboard ref={backboardRef} />
        <AnimationScrim ref={animationScrim} />
      </Fixer>
    )
  }
)

const AnimationScrim = styled.div`
  background-color: ${darkGrey(100)};
  position: fixed;

  opacity: 0;

  pointer-events: none;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: ${zIndex.floor};
`

const Fixer = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: ${zIndex.high};

  visibility: hidden;
`

const MenuBackboard = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${themeTone(100)};
  transform: translate3d(0, -100%, 0);

  z-index: ${zIndex.medium};

  opacity: 0;
`

const Container = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: ${zIndex.high + 1};

  overflow-y: hidden;

  ${mq.lessThan("bottomThumb")`
    padding-top: 14rem;
  `}

  ${scaleBetween("padding-top", "14rem", "14rem", "topThumb", "bottomPalm")}

  ${mq.greaterThan("topPalm")`
    display: flex;

    align-items: center;
  `}
`

const MenuContents = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;

  opacity: 0;

  ${mq.lessThan("bottomPalm")`
    flex-direction: column;
  `}

  ${mq.lessThan("bottomPalm")`
    padding-left: 2rem;
  `}
`

const ListTitle = styled.h2`
  ${typeSupTitle}
  ${typeSizeBaseXs}

  display: flex;
  align-items: center;

  margin-bottom: 1.75em;

  ${mq.greaterThan("topPalm")`
    margin-bottom: 2.3em;
  `}

  ${mq.greaterThan("topDesk")`
    margin-bottom: 3.5em;
  `}
`

const ListTitleNumber = styled.span`
  font-size: 0.85em;
`

const ListTitleDivider = styled.span`
  height: 0.063em;
  min-height: 1px;
  width: 0.7em;
  background-color: currentColor;
  margin-left: 0.5em;
  margin-right: 0.5em;
`

export default Menu
