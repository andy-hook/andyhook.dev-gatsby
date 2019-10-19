import React, { useEffect, memo } from "react"
import styled from "styled-components"
import Details from "./details/details"
import { zIndex } from "@style/variables"
import { runAnimation, animation } from "./hero.animation"
import { Ref } from "@custom-types/ref"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"
import Gutter from "@components/shared/gutter/gutter"
import { themeToneAlpha, themeTone } from "@style/theme"
import { ISocialMeta } from "model"

interface Props {
  loaderVisible: boolean
  firstEntrance: boolean
  socialIconData: ISocialMeta
  transitionState: ItransitionState
}

const Hero: React.FunctionComponent<Props> = memo(
  ({ socialIconData, loaderVisible, firstEntrance, transitionState }) => {
    const detailsRef = React.useRef() as Ref
    const backgroundRef = React.useRef() as Ref

    const refs = {
      details: detailsRef,
      background: backgroundRef,
    }

    useEffect(() => {
      const { transitionStatus, exit, entry } = transitionState

      switch (transitionStatus) {
        case "POP":
          runAnimation(refs, "pop")
          break
        case "entering":
          switch (entry.state.animType) {
            case "enter":
              runAnimation(refs, "enter")

              break
            // This clause works around bug with pushstate and history navigation
            // Hopefully this can be resolved and pop will run consistently
            // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
            default:
              runAnimation(refs, "pop")
          }
          break
        case "exiting":
          switch (exit.state.animType) {
            case "exit":
              runAnimation(refs, "exit")

              break
          }
          break
      }
    }, [transitionState.transitionStatus])

    // Perform this immediatley without waiting for a trigger
    useEffect(() => {
      const backgroundEntranceAnimation = animation.background.firstEnter

      if (firstEntrance && backgroundEntranceAnimation) {
        backgroundEntranceAnimation(backgroundRef)
      }
    }, [firstEntrance])

    // Only trigger site entrance animation when requested by loader
    useEffect(() => {
      if (!loaderVisible && firstEntrance) {
        runAnimation(refs, "firstEnter")
      }
    }, [loaderVisible])

    return (
      <>
        <Container>
          <DetailsPos ref={detailsRef}>
            <Gutter>
              <Details buttonHref={socialIconData.dribbble.url} />
            </Gutter>
          </DetailsPos>

          <BackgroundContainer ref={backgroundRef}>
            <BackgroundGradient />
          </BackgroundContainer>
        </Container>
      </>
    )
  }
)

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const DetailsPos = styled.div`
  position: relative;

  width: 100%;

  margin-bottom: -6vh;

  z-index: ${zIndex.low};

  opacity: 0;

  will-change: transform;
`

const BackgroundContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow: hidden;

  z-index: ${zIndex.floor};

  opacity: 0;
`

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: ${zIndex.medium};

  background: linear-gradient(
    175deg,
    ${themeToneAlpha(100, 0)} 25%,
    ${themeTone(100)} 65%
  );
`

export default Hero
