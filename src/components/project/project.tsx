import React, { useEffect } from "react"
import styled from "styled-components"
import ContentScrollContainer from "@components/shared/content-scroll/content-scroll.container"
import Header from "@components/project/header/header"
import NextProject from "@components/project/next-project/next-project"
import { TProjects, TProjectNames } from "@custom-types/model"
import { getCurrentProjectData, getNextProjectData } from "./utils/utils"
import { themeTone } from "@style/theme"
import Contents from "@components/project/contents/contents"
import { zIndex } from "@style/variables"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"
import { Ref } from "@custom-types/ref"
import { animation, runAnimation } from "./project.animation"
import { IStore } from "@custom-types/store"

interface Props {
  projectData: TProjects
  projectName: TProjectNames
  transitionState: ItransitionState
  canPerformIntro?: boolean
  introTrigger?: boolean
  menuOpen: IStore["menuOpen"]
}

const Project: React.FunctionComponent<Props> = ({
  children,
  projectName,
  projectData,
  transitionState,
  canPerformIntro,
  introTrigger,
  menuOpen,
}) => {
  const backboard = React.useRef() as Ref
  const content = React.useRef() as Ref
  const animationScrim = React.useRef() as Ref

  const refs = {
    backboard,
    content,
    animationScrim,
  }

  // Animate scrim on menu change
  useEffect(() => {
    if (menuOpen) {
      runAnimation(refs, "openMenu")
    } else {
      runAnimation(refs, "closeMenu")
    }
  }, [menuOpen])

  // The backboard needs to be positioned into view on the first site entrance
  // This is because it's initial style must be set to offscreen to prevent flicker in other contexts
  useEffect(() => {
    const runBackboardEntranceAnimation = animation.backboard.siteEntrance

    if (canPerformIntro && runBackboardEntranceAnimation) {
      runBackboardEntranceAnimation(backboard)
    }
  }, [canPerformIntro])

  // Only trigger site entrance animation when requested by loader
  useEffect(() => {
    if (introTrigger && canPerformIntro) {
      runAnimation(refs, "siteEntrance")
    }
  }, [introTrigger])

  useEffect(() => {
    const { transitionStatus } = transitionState
    const exitType = transitionState.exit.state.animType
    const entryType = transitionState.entry.state.animType

    switch (transitionStatus) {
      case "POP":
        runAnimation(refs, "pop")
        break
      case "entering":
        switch (entryType) {
          case "enter-from-home":
            {
              runAnimation(refs, "enterFromHome")
            }
            break
          case "enter-from-nav":
            {
              runAnimation(refs, "enterFromNav")
            }
            break
          // This clause works around bug with pushstate and history navigation
          // Hopefully this can be resolved and pop will run consistently
          // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
          default:
            runAnimation(refs, "pop")
        }
        break
      case "exiting":
        switch (exitType) {
          case "exit-to-home":
            {
              runAnimation(refs, "exitToHome")
            }
            break
        }
        break
    }
  }, [transitionState.transitionStatus])

  return (
    <>
      <AnimationScrim ref={animationScrim} />
      <ContentScrollPos>
        <ContentScrollContainer>
          <Container ref={content}>
            <Header project={getCurrentProjectData(projectData, projectName)} />
            <TempIntroImage />
            <Contents
              sections={
                getCurrentProjectData(projectData, projectName).contents
              }
            />
            {children}
            <NextProject
              project={getNextProjectData(projectData, projectName)}
            />
          </Container>
        </ContentScrollContainer>
      </ContentScrollPos>
      <ProjectBackboard ref={backboard} />
    </>
  )
}

const AnimationScrim = styled.div`
  background-color: ${themeTone(100)};
  position: absolute;

  opacity: 0;

  pointer-events: none;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: ${zIndex.high};
`

const ContentScrollPos = styled.div`
  position: relative;
  z-index: ${zIndex.medium};
`

const ProjectBackboard = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${themeTone(100)};

  z-index: ${zIndex.low};

  transform: translate3d(100%, 0, 0);
  opacity: 0;
`

const Container = styled.article`
  height: 3000px;

  opacity: 0;
`

const TempIntroImage = styled.div`
  background-color: ${themeTone(400)};
  height: 500px;
`

export default Project
