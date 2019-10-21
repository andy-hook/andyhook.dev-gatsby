import React, { useState } from "react"
import { IProjectItem } from "@custom-types/model"
import styled from "styled-components"
import CoverImageContainer from "@components/shared/cover-image/cover-image.container"
import Link from "gatsby-plugin-transition-link"
import { zIndex } from "@style/variables"
import { Ref } from "@custom-types/ref"
import { TweenMax, Expo } from "gsap"
import "gsap/umd/ScrollToPlugin"
import useDeferredRunEffect from "@hooks/deferred-run"
import { themeTone } from "@style/theme"

interface Props {
  nextProjectItem: IProjectItem
}

const totalAnimationLength = 1

export const linkProps = {
  exit: {
    state: {
      animType: "nextProjectExit",
    },
    length: totalAnimationLength, // Ensure there is a single frame crossover when both components remain mounted to avoid visible flicker
  },
  entry: {
    state: {
      animType: "nextProjectEnter",
    },
    delay: totalAnimationLength, // How long the current page should show for before changing scroll position
    length: totalAnimationLength,
  },
}

const NextProject: React.FunctionComponent<Props> = ({ nextProjectItem }) => {
  const backgroundRef = React.useRef() as Ref
  const linkRef = React.useRef() as Ref

  const [animateToNextProject, setAnimateToNextProject] = useState(false)

  const animateLeave = () => {
    TweenMax.to(backgroundRef.current, totalAnimationLength, {
      ease: Expo.easeOut,
      scale: 1.1,
      y: "-2%",
      opacity: 0,
    })

    TweenMax.to(linkRef.current, 0.4, {
      opacity: 0,
    })

    TweenMax.to(window, totalAnimationLength, {
      scrollTo: {
        ease: Expo.easeOut,
        y: "max",
        autoKill: false,
      },
    })
  }

  const handleLinkClick = () => {
    setAnimateToNextProject(true)
  }

  useDeferredRunEffect(() => {
    if (animateToNextProject) {
      animateLeave()
    }
  }, [animateToNextProject])

  return (
    <Container>
      <StyledLink
        to={nextProjectItem.path}
        {...linkProps}
        onClick={handleLinkClick}
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
