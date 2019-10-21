import React, { useEffect, memo } from "react"
import styled from "styled-components"
import Header from "@components/project/header/header"
import NextProject from "@components/project/next-project/next-project"
import { TProjects, TProjectNames } from "@custom-types/model"
import { getCurrentProjectData, getNextProjectData } from "./utils/utils"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"
import { Ref } from "@custom-types/ref"
import { IStore } from "@custom-types/store"
import { themeTone } from "@style/theme"
import { TweenMax } from "gsap"

interface Props {
  projectData: TProjects
  projectName: TProjectNames
  transitionState: ItransitionState
  canPerformIntro?: boolean
  introTrigger?: boolean
  menuOpen: IStore["menuOpen"]
}

const Project: React.FunctionComponent<Props> = memo(
  ({
    children,
    projectName,
    projectData,
    transitionState,
    canPerformIntro,
    introTrigger,
  }) => {
    const content = React.useRef() as Ref

    const animatePop = () => {
      TweenMax.fromTo(
        content.current,
        2,
        {
          opacity: 1,
        },
        {
          opacity: 1,
        }
      )
    }

    const animateMenuEnter = () => {
      TweenMax.fromTo(
        content.current,
        0.75,
        {
          opacity: 1,
        },
        {
          opacity: 1,
          clearProps: "transform",
        }
      )
    }

    const animateFirstEnter = () => {
      TweenMax.fromTo(
        content.current,
        2,
        {
          opacity: 1,
        },
        {
          opacity: 1,
          delay: 0.65,
        }
      )
    }

    // Only trigger site entrance animation when requested by loader
    useEffect(() => {
      if (introTrigger && canPerformIntro) {
        animateFirstEnter()
      }
    }, [introTrigger])

    useEffect(() => {
      const { transitionStatus } = transitionState
      const entryType = transitionState.entry.state.animType

      switch (transitionStatus) {
        case "POP":
          animatePop()
          break
        case "entering":
          switch (entryType) {
            case "menuEnter":
              {
                animateMenuEnter()
              }
              break
            // This clause works around bug with pushstate and history navigation
            // Hopefully this can be resolved and pop will run consistently
            // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
            default:
              animatePop()
          }
          break
        case "exiting":
          break
      }
    }, [transitionState.transitionStatus])

    return (
      <>
        <Container ref={content}>
          <Header project={getCurrentProjectData(projectData, projectName)} />
          <MainSection>{children}</MainSection>
          <NextProject
            nextProjectItem={getNextProjectData(projectData, projectName)}
          />
        </Container>
      </>
    )
  }
)

const MainSection = styled.header`
  height: 1000px;

  background-color: ${themeTone(200)};
`

const Container = styled.article``

export default Project
