import React, { useEffect, memo } from "react"
import styled from "styled-components"
import Details from "./details/details"
import { zIndex } from "@style/variables"
import { Ref } from "@custom-types/ref"
import Gutter from "@components/shared/gutter/gutter"
import { themeToneAlpha, themeTone } from "@style/theme"
import { ISocialMeta } from "model"
import useDeferredRunEffect from "@hooks/deferred-run"
import { useInView } from "react-intersection-observer"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import { TweenMax, Elastic } from "gsap"

interface Props {
  loaderVisible: boolean
  firstEntrance: boolean
  socialIconData: ISocialMeta
  menuOpen: boolean
}

const Hero: React.FunctionComponent<Props> = memo(
  ({ socialIconData, loaderVisible, firstEntrance, menuOpen }) => {
    const detailsRef = React.useRef() as Ref
    const backgroundRef = React.useRef() as Ref

    const [inviewRef, inView] = useInView()
    const transitionState = useTransitionState()

    const animatePop = () => {
      TweenMax.fromTo(
        detailsRef.current,
        0.75,
        {
          scale: 1.5,
        },
        {
          ease: Elastic.easeOut.config(0.8, 1),
          scale: 1,
          opacity: 1,
          clearProps: "transform",
        }
      )

      TweenMax.to(backgroundRef.current, 0.9, {
        opacity: 1,
      })
    }

    const animateEnter = () => {
      TweenMax.fromTo(
        detailsRef.current,
        0.25,
        {
          y: "10%",
        },
        {
          y: "0%",
          opacity: 1,
          clearProps: "transform",
        }
      )

      TweenMax.to(backgroundRef.current, 0.25, {
        opacity: 1,
      })
    }

    const animateExit = () => {
      TweenMax.fromTo(
        detailsRef.current,
        0.25,
        {
          y: "0%",
        },
        {
          y: "-10%",
          opacity: 0,
        }
      )

      TweenMax.to(backgroundRef.current, 0.25, {
        opacity: 0,
      })
    }

    const animateOpenMenu = () => {
      TweenMax.fromTo(
        detailsRef.current,
        0.25,
        {
          y: "0%",
        },
        {
          y: "-50%",
          opacity: 0,
          clearProps: "transform",
        }
      )
    }

    const animateCloseMenu = () => {
      TweenMax.fromTo(
        detailsRef.current,
        0.25,
        {
          opacity: 0,
          y: "50%",
        },
        {
          y: "0%",
          opacity: 1,
          clearProps: "transform",
        }
      )
    }

    const animateFirstEnter = () => {
      TweenMax.fromTo(
        detailsRef.current,
        0.75,
        {
          scale: 1.5,
        },
        {
          ease: Elastic.easeOut.config(0.8, 1),
          scale: 1,
          opacity: 1,
          clearProps: "transform",
          delay: 0.65,
        }
      )
    }

    useEffect(() => {
      const { transitionStatus, exit, entry } = transitionState

      switch (transitionStatus) {
        case "POP":
          animatePop()
          break
        case "entering":
          switch (entry.state.animType) {
            case "enter":
              animateEnter()

              break
            // This clause works around bug with pushstate and history navigation
            // Hopefully this can be resolved and pop will run consistently
            // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
            default:
              animatePop()
          }
          break
        case "exiting":
          switch (exit.state.animType) {
            case "exit":
              animateExit()

              break
          }
          break
      }
    }, [transitionState.transitionStatus])

    useEffect(() => {
      if (firstEntrance) {
        TweenMax.to(backgroundRef.current, 0.9, {
          opacity: 1,
        })
      }
    }, [firstEntrance])

    // Only trigger site entrance animation when requested by loader
    useEffect(() => {
      if (!loaderVisible && firstEntrance) {
        animateFirstEnter()
      }
    }, [loaderVisible])

    useDeferredRunEffect(() => {
      if (inView) {
        if (menuOpen) {
          animateOpenMenu()
        } else {
          animateCloseMenu()
        }
      }
    }, [menuOpen])

    return (
      <Container ref={inviewRef}>
        <DetailsPos ref={detailsRef}>
          <Gutter>
            <Details buttonHref={socialIconData.dribbble.url} />
          </Gutter>
        </DetailsPos>

        <BackgroundContainer ref={backgroundRef}>
          <BackgroundGradient />
        </BackgroundContainer>
      </Container>
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
