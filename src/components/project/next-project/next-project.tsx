import React, { MutableRefObject } from "react"
import { ProjectItem } from "@custom-types/model"
import { TweenMax, Expo } from "gsap"
import { useInView } from "react-intersection-observer"
import * as S from "./next-project.style"
import {
  TRANSITION_TYPE_NEXT_PROJECT_EXIT,
  TRANSITION_TYPE_NEXT_PROJECT_ENTER,
} from "@constants"

interface Props {
  nextProjectItem: ProjectItem
}

const projectChangeDuration = 1.3

export const linkProps = {
  exit: {
    state: {
      animType: TRANSITION_TYPE_NEXT_PROJECT_EXIT,
    },
    length: projectChangeDuration, // Should match entry delay
  },
  entry: {
    state: {
      animType: TRANSITION_TYPE_NEXT_PROJECT_ENTER,
    },
    delay: projectChangeDuration, // How long the current page should show for before changing scroll position
    length: projectChangeDuration,
  },
}

const NextProject: React.FunctionComponent<Props> = ({ nextProjectItem }) => {
  const slideRef = React.useRef() as MutableRefObject<HTMLDivElement>
  const slideInnerRef = React.useRef() as MutableRefObject<HTMLDivElement>
  const slideOverRef = React.useRef() as MutableRefObject<HTMLDivElement>
  const slideContainerRef = React.useRef() as MutableRefObject<HTMLDivElement>
  const containerRef = React.useRef() as MutableRefObject<HTMLDivElement>
  const [inviewRef] = useInView()

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

  return (
    <>
      <div ref={inviewRef}>
        <S.Container ref={containerRef}>
          <S.StyledLink
            to={nextProjectItem.path}
            {...linkProps}
            onClick={animateProjectChange}
          >
            dfsdfds
          </S.StyledLink>
        </S.Container>
      </div>
      <S.SlideContainer ref={slideContainerRef}>
        <S.Slide ref={slideRef}>
          <S.SlideInner ref={slideInnerRef} />
        </S.Slide>

        <S.SlideOver ref={slideOverRef} />
      </S.SlideContainer>
    </>
  )
}

export default NextProject
