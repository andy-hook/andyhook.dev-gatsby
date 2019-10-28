import React from "react"
import { IProjectItem } from "@custom-types/model"
import styled, { css } from "styled-components"
import Link from "gatsby-plugin-transition-link"
import { zIndex } from "@style/variables"
import { Ref } from "@custom-types/ref"
import { TweenMax, Expo } from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"
import { themeTone } from "@style/theme"
import { useInView } from "react-intersection-observer"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"

interface Props {
  nextProjectItem: IProjectItem
}

export const linkProps = {
  exit: {
    state: {
      animType: "nextProjectExit",
    },
    length: 1.3, // Should match entry delay
  },
  entry: {
    state: {
      animType: "nextProjectEnter",
    },
    delay: 1.3, // How long the current page should show for before changing scroll position
    length: 1.3,
  },
}

const NextProject: React.FunctionComponent<Props> = ({ nextProjectItem }) => {
  const transitionState = useTransitionState()
  const slideRef = React.useRef() as Ref
  const slideInnerRef = React.useRef() as Ref
  const slideOverRef = React.useRef() as Ref
  const slideContainerRef = React.useRef() as Ref
  const containerRef = React.useRef() as Ref
  const [inviewRef, inView] = useInView()

  const setSlideDimensions = () => {
    const viewportOffset = containerRef.current.getBoundingClientRect()

    TweenMax.set(slideRef.current, {
      height: viewportOffset.top,
    })
  }

  const animateProjectChange = () => {
    setSlideDimensions()

    TweenMax.set(slideContainerRef.current, {
      visibility: "visible",
    })

    TweenMax.to(slideInnerRef.current, 1, {
      ease: Expo.easeOut,
      y: "0%",
    })

    TweenMax.to(slideOverRef.current, 1, {
      ease: Expo.easeOut,
      delay: 0.3,
      y: "0%",
      onComplete: () => {
        window.scrollTo(0, 0)
      },
    })
  }

  const animateExit = () => {
    if (inView) {
      // TweenMax.fromTo(
      //   backgroundRef.current,
      //   0.25,
      //   {
      //     y: 0,
      //   },
      //   {
      //     y: -40,
      //     opacity: 0,
      //   }
      // )
      // TweenMax.to(linkRef.current, 0.2, {
      //   opacity: 0,
      // })
    }
  }

  useDeferredRunEffect(() => {
    const { transitionStatus, exit } = transitionState

    switch (transitionStatus) {
      case "exiting":
        switch (exit.state.animType) {
          case "exit":
            animateExit()

            break
        }
        break
    }
  }, [transitionState.transitionStatus])

  return (
    <>
      <div ref={inviewRef}>
        <Container ref={containerRef}>
          <StyledLink
            to={nextProjectItem.path}
            {...linkProps}
            onClick={animateProjectChange}
          >
            dfsdfds
          </StyledLink>
        </Container>
      </div>
      <SlideContainer ref={slideContainerRef}>
        <Slide ref={slideRef}>
          <SlideInner ref={slideInnerRef} />
        </Slide>

        <SlideOver ref={slideOverRef} />
      </SlideContainer>
    </>
  )
}

const Container = styled.div`
  height: 64vh;

  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  background-color: ${themeTone(200)};
`

const StyledLink = styled(Link)`
  z-index: ${zIndex.floor};
`

const SlideContainer = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  height: 100vh;
  width: 100%;

  pointer-events: none;
  visibility: hidden;

  z-index: ${zIndex.low};
`

const absolutePositioning = css`
  position: absolute;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
`

const Slide = styled.div`
  ${absolutePositioning}

  overflow: hidden;

  z-index: ${zIndex.floor};
`

const SlideInner = styled.div`
  ${absolutePositioning}

  background-color: ${themeTone(200)};

  transform: translate3d(0, 100%, 0);
`

const SlideOver = styled.div`
  ${absolutePositioning}

  background-color: ${themeTone(100)};

  transform: translate3d(0, 100%, 0);

  z-index: ${zIndex.low};
`

export default NextProject
