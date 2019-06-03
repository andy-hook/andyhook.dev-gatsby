import React, { useEffect } from "react"
import styled from "styled-components"
import ContentScrollContainer from "@components/shared/content-scroll/content-scroll.container"
import Header from "@components/project/header/header"
import NextProject from "@components/project/next-project/next-project"
import { TProjects, TProjectNames } from "@custom-types/model"
import { ContainerProps } from "./project.container"
import { getCurrentProjectData, getNextProjectData } from "./utils/utils"
import { themeTone } from "@style/theme"
import Contents from "@components/project/contents/contents"
import { zIndex } from "@style/variables"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"
import { Ref } from "@custom-types/ref"
import { keys } from "@custom-types/utils"
import { animation } from "./project.animation"

interface Props {
  projectData: TProjects
  projectName: TProjectNames
  transitionState: ItransitionState
  canPerformIntro?: boolean
  introTrigger?: boolean
}

type AllProps = Props & ContainerProps

const Project: React.FunctionComponent<AllProps> = ({
  children,
  projectName,
  projectData,
  transitionState,
  canPerformIntro,
  introTrigger,
}) => {
  const backboardRef = React.useRef() as Ref
  const contentRef = React.useRef() as Ref

  const refs = {
    backboard: backboardRef,
    content: contentRef,
  }

  const runAnimation = (type: string) => {
    keys(refs).map(item => {
      animation[item][type](refs[item])
    })
  }

  // The backboard needs to be positioned into view on the first site entrance
  // This is because it's initial style must be set to offscreen to prevent flicker in other contexts
  useEffect(() => {
    if (canPerformIntro) {
      animation.backboard.siteEntrance(backboardRef)
    }
  }, [canPerformIntro])

  // Only trigger site entrance animation when requested by loader
  useEffect(() => {
    if (introTrigger && canPerformIntro) {
      runAnimation("siteEntrance")
    }
  }, [introTrigger])

  useEffect(() => {
    const { transitionStatus } = transitionState
    const exitType = transitionState.exit.state.animType
    const entryType = transitionState.entry.state.animType

    switch (transitionStatus) {
      case "POP":
        runAnimation("pop")
        break
      case "entering":
        switch (entryType) {
          case "enter-from-home":
            {
              runAnimation("enterFromHome")
            }
            break

          // This clause works around bug with pushstate and history navigation
          // Hopefully this can be resolved and pop will run consistently
          // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
          default:
            runAnimation("pop")
        }
        break
      case "exiting":
        switch (exitType) {
          case "exit-to-home":
            {
              runAnimation("exitToHome")
            }
            break
        }
        break
    }
  }, [transitionState.transitionStatus])

  return (
    <>
      <ContentScrollPos>
        <ContentScrollContainer>
          <Container ref={contentRef}>
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
      <ProjectBackboard ref={backboardRef} />
    </>
  )
}

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
