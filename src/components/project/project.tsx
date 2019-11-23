import React, { useEffect, memo, MutableRefObject } from "react"
import Header from "@components/project/header/header"
import NextProject from "@components/project/next-project/next-project"
import { Projects, ProjectNames } from "@custom-types/model"
import { getCurrentProjectData, getNextProjectData } from "./utils/utils"
import { TransitionState } from "@custom-types/gatsby-plugin-transition-link"
import { TweenMax } from "gsap"
import * as S from "./project.style"
import usePageTransition from "@hooks/page-transition"

interface Props {
  projectData: Projects
  projectName: ProjectNames
  transitionState: TransitionState
  canPerformIntro?: boolean
  introTrigger?: boolean
}

const Project: React.FunctionComponent<Props> = memo(
  ({ children, projectName, projectData, canPerformIntro, introTrigger }) => {
    const contentRef = React.useRef() as MutableRefObject<HTMLElement>

    const animatePop = () => {
      TweenMax.fromTo(
        contentRef.current,
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
        contentRef.current,
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
        contentRef.current,
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

    const { inviewRef } = usePageTransition({
      runInview: {
        onPop: animatePop,
        onEnterFromMenu: animateMenuEnter,
      },
    })

    // Only trigger site entrance animation when requested by loader
    useEffect(() => {
      if (introTrigger && canPerformIntro) {
        animateFirstEnter()
      }
    }, [introTrigger])

    return (
      <div ref={inviewRef}>
        <S.Container ref={contentRef}>
          <Header project={getCurrentProjectData(projectData, projectName)} />
          <S.MainSection>{children}</S.MainSection>
          <NextProject
            nextProjectItem={getNextProjectData(projectData, projectName)}
          />
        </S.Container>
      </div>
    )
  }
)

export default Project
