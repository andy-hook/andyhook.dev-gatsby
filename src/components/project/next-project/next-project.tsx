import React from "react"
import { IProjectItem } from "@custom-types/model"
import styled from "styled-components"
import CoverImageContainer from "@components/shared/cover-image/cover-image.container"
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
    length: 0.5, // Should match entry delay
  },
  entry: {
    state: {
      animType: "nextProjectEnter",
    },
    delay: 0.5, // How long the current page should show for before changing scroll position
    length: 0.5,
  },
}

const NextProject: React.FunctionComponent<Props> = ({ nextProjectItem }) => {
  const transitionState = useTransitionState()
  const backgroundRef = React.useRef() as Ref
  const linkRef = React.useRef() as Ref
  const [inviewRef, inView] = useInView()

  const animateProjectChange = () => {
    TweenMax.to(backgroundRef.current, 0.3, {
      ease: Expo.easeOut,
      scale: 1.1,
      y: "-2%",
      opacity: 0,
    })

    TweenMax.to(linkRef.current, 0.3, {
      opacity: 0,
    })
  }

  const animateExit = () => {
    if (inView) {
      TweenMax.fromTo(
        backgroundRef.current,
        0.25,
        {
          y: 0,
        },
        {
          y: -40,
          opacity: 0,
        }
      )

      TweenMax.to(linkRef.current, 0.2, {
        opacity: 0,
      })
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
    <Container ref={inviewRef}>
      <StyledLink
        to={nextProjectItem.path}
        {...linkProps}
        onClick={animateProjectChange}
        ref={linkRef}
      >
        dfsdfds
      </StyledLink>
      <BackgroundImageFixer>
        <BackgroundImagePosition ref={backgroundRef}>
          <CoverImageContainer imagePath={nextProjectItem.images} />
        </BackgroundImagePosition>
      </BackgroundImageFixer>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;

  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  overflow: hidden;
`

const BackgroundImageFixer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  background-color: ${themeTone(100)};
`

const BackgroundImagePosition = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  transform: scale(1);

  z-index: ${zIndex.floor};

  opacity: 0.25;
`

const StyledLink = styled(Link)`
  z-index: ${zIndex.low};
`

export default NextProject
