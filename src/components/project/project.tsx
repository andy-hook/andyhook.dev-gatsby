import React, { useEffect, memo } from "react"
import Header from "@components/project/header/header"
import NextProject from "@components/project/next-project/next-project"
import { TProjects, TProjectNames } from "@custom-types/model"
import { getCurrentProjectData, getNextProjectData } from "./utils/utils"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"
import { Ref } from "@custom-types/ref"
import { TweenMax } from "gsap"
import * as S from "./project.style"
import usePageTransition from "@hooks/page-transition"

interface Props {
  projectData: TProjects
  projectName: TProjectNames
  transitionState: ItransitionState
  canPerformIntro?: boolean
  introTrigger?: boolean
}

const Project: React.FunctionComponent<Props> = memo(
  ({ children, projectName, projectData, canPerformIntro, introTrigger }) => {
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

    usePageTransition({
      onPop: animatePop,
      onEnterFromMenu: animateMenuEnter,
    })

    // Only trigger site entrance animation when requested by loader
    useEffect(() => {
      if (introTrigger && canPerformIntro) {
        animateFirstEnter()
      }
    }, [introTrigger])

    return (
      <>
        <S.Container ref={content}>
          <Header project={getCurrentProjectData(projectData, projectName)} />
          <S.MainSection>{children}</S.MainSection>
          <NextProject
            nextProjectItem={getNextProjectData(projectData, projectName)}
          />
        </S.Container>
      </>
    )
  }
)

export default Project
