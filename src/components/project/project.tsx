import React, { useEffect, memo } from "react"
import styled from "styled-components"
import Header from "@components/project/header/header"
import NextProject from "@components/project/next-project/next-project"
import { TProjects, TProjectNames } from "@custom-types/model"
import { getCurrentProjectData, getNextProjectData } from "./utils/utils"
import { themeTone } from "@style/theme"
import Contents from "@components/project/contents/contents"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"
import { Ref } from "@custom-types/ref"
import { runAnimation } from "./project.animation"
import { IStore } from "@custom-types/store"

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
    menuOpen,
  }) => {
    const content = React.useRef() as Ref

    const refs = {
      content,
    }

    // Animate scrim on menu change
    useEffect(() => {
      if (menuOpen) {
        runAnimation(refs, "openMenu")
      } else {
        runAnimation(refs, "closeMenu")
      }
    }, [menuOpen])

    // Only trigger site entrance animation when requested by loader
    useEffect(() => {
      if (introTrigger && canPerformIntro) {
        runAnimation(refs, "firstEnter")
      }
    }, [introTrigger])

    useEffect(() => {
      const { transitionStatus } = transitionState
      const entryType = transitionState.entry.state.animType

      switch (transitionStatus) {
        case "POP":
          runAnimation(refs, "pop")
          break
        case "entering":
          switch (entryType) {
            case "menuEnter":
              {
                runAnimation(refs, "menuEnter")
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
          break
      }
    }, [transitionState.transitionStatus])

    return (
      <>
        <Container ref={content}>
          <Header project={getCurrentProjectData(projectData, projectName)} />
          <TempIntroImage />
          <Contents
            sections={getCurrentProjectData(projectData, projectName).contents}
          />
          {children}
          <NextProject project={getNextProjectData(projectData, projectName)} />
        </Container>
      </>
    )
  }
)

const Container = styled.article``

const TempIntroImage = styled.div`
  background-color: ${themeTone(400)};
  height: 500px;
`

export default Project
