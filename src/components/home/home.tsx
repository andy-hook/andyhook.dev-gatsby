import React, { memo, ReactNode, useEffect } from "react"
import ContentScrollContainer from "@components/shared/content-scroll/content-scroll.container"
import styled from "styled-components"
import { themeLayer, themeTone } from "@style/theme"
import { zIndex } from "@style/variables"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"
import { runAnimation } from "./home.animation"
import { Ref } from "@custom-types/ref"
import { IStore } from "@custom-types/store"

interface Props {
  children: ReactNode
  menuOpen: IStore["menuOpen"]
  transitionState: ItransitionState
}

const Home: React.FunctionComponent<Props> = memo(
  ({ children, transitionState, menuOpen }) => {
    const animationScrim = React.useRef() as Ref

    const refs = {
      animationScrim,
    }

    useEffect(() => {
      const { transitionStatus, exit, entry } = transitionState

      switch (transitionStatus) {
        case "entering":
          switch (entry.state.animType) {
            case "enter-from-project":
              {
                runAnimation(refs, "enterFromProject")
              }
              break
          }
          break
        case "exiting":
          switch (exit.state.animType) {
            case "exit-to-project":
              {
                runAnimation(refs, "exitToProject")
              }
              break
          }
          break
      }
    }, [transitionState.transitionStatus])

    useEffect(() => {
      if (menuOpen) {
        runAnimation(refs, "openMenu")
      } else {
        runAnimation(refs, "closeMenu")
      }
    }, [menuOpen])

    return (
      <>
        <AnimationScrim ref={animationScrim} />
        <ContentScrollContainer>
          <Container>{children}</Container>
        </ContentScrollContainer>
      </>
    )
  }
)

const AnimationScrim = styled.div`
  background-color: ${themeTone(100)};
  position: absolute;

  opacity: 0;

  pointer-events: none;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: ${zIndex.medium};
`

const Container = styled.article`
  background-color: ${themeLayer("lowest")};
`

export default Home
