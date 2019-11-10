import React, { memo } from "react"
import styled from "styled-components"
import { Ref } from "@custom-types/ref"
import { zIndex, darkGrey } from "@style/variables"
import { themeTone } from "@style/theme"
import { typeSupTitle, typeSizeBaseXs } from "@style/typography"
import { ISocialMeta, TProjects } from "model"
import { mq, scaleBetween } from "@style/media-queries"
import { TweenMax, Expo } from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"
import ProjectListComponent from "./project-list/project-list"
import { useMediaQueryContext } from "../media-query-provider/media-query-provider"

interface Props {
  open: boolean
}

interface DataProps {
  social: ISocialMeta
  projects: TProjects
}

type AllProps = Props & DataProps

export let menuIsAnimating = false
let routeTransition = false

const Menu: React.FunctionComponent<AllProps> = memo(({ open, projects }) => {
  const backboardRef = React.useRef() as Ref
  const contentsRef = React.useRef() as Ref
  const containerRef = React.useRef() as Ref
  const animationScrim = React.useRef() as Ref
  const { topPalm } = useMediaQueryContext()

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
    <Fixer ref={containerRef}>
      <Container>
        <Sidebar>
          <Contents ref={contentsRef}>
            <ListTitle>
              <ListTitleNumber>01</ListTitleNumber>
              <ListTitleDivider />
              Projects
            </ListTitle>
            <ProjectListComponent
              projectDataList={projects}
              onClick={handleProjectClick}
            />
          </Contents>

          <MenuBackboard ref={backboardRef} />
        </Sidebar>
      </Container>

      <AnimationScrim ref={animationScrim} />
    </Fixer>
  )
})

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

export const sidebarWidth = {
  initial: 100,
  thumb: 90,
  palm: 70,
  lap: 50,
  desk: 40,
  wide: 30,
  wall: 25,
}

const Container = styled.div`
  position: absolute;

  top: 0;
  right: 0;
  height: 100%;
  width: ${sidebarWidth.initial}%;

  z-index: ${zIndex.high + 1};

  overflow-y: hidden;

  ${mq.lessThan("bottomThumb")`
    padding-top: 14rem;
  `}

  ${mq.greaterThan("topThumb")`
    width: ${sidebarWidth.thumb}%;
  `}

  ${mq.greaterThan("topPalm")`
    left: 0;
    width: ${sidebarWidth.palm}%;
  `}

  ${mq.greaterThan("topLap")`
    width: ${sidebarWidth.lap}%;
  `}

  ${mq.greaterThan("topDesk")`
    width: ${sidebarWidth.desk}%;
  `}

  ${mq.greaterThan("topWide")`
    width: ${sidebarWidth.wide}%;
  `}

  ${mq.greaterThan("topWall")`
    width: ${sidebarWidth.wall}%;
  `}

  ${scaleBetween("padding-top", "14rem", "14rem", "topThumb", "bottomPalm")}

  ${mq.greaterThan("topPalm")`
    display: flex;

    align-items: center;
  `}
`

const Sidebar = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;

  ${mq.lessThan("bottomPalm")`
    flex-direction: column;
  `}

  ${mq.lessThan("bottomPalm")`
    padding-left: 2rem;
  `}
`

const Contents = styled.div`
  position: relative;
  opacity: 0;

  z-index: ${zIndex.medium};
`

const MenuBackboard = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${themeTone(100)};
  transform: translate3d(0, 0, 0);

  z-index: ${zIndex.low};

  opacity: 0;
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
