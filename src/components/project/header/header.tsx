import React, { useEffect } from "react"
import { IProjectItem } from "@custom-types/model"
import CoverImageContainer from "@components/shared/cover-image/cover-image.container"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import { Ref } from "@custom-types/ref"
import { TweenMax } from "gsap"
import { useInView } from "react-intersection-observer"
import * as S from "./header.style"

interface Props {
  project: IProjectItem
}

const Header: React.FunctionComponent<Props> = ({ project }) => {
  const transitionState = useTransitionState()
  const backgroundRef = React.useRef() as Ref
  const [inviewRef, inView] = useInView()

  const animatePop = () => {
    TweenMax.fromTo(
      backgroundRef.current,
      0.75,
      {
        scale: 1.05,
      },
      {
        scale: 1,
        opacity: 1,
      }
    )
  }

  const animateEnter = () => {
    TweenMax.fromTo(
      backgroundRef.current,
      0.75,
      {
        scale: 1.05,
      },
      {
        scale: 1,
        opacity: 1,
      }
    )
  }

  const animateExit = () => {
    if (inView) {
      TweenMax.fromTo(
        backgroundRef.current,
        0.25,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: 40,
          opacity: 0,
        }
      )
    }
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

  return (
    <S.Container ref={inviewRef}>
      <S.BackgroundImage ref={backgroundRef}>
        <CoverImageContainer imagePath={project.images} />
      </S.BackgroundImage>
    </S.Container>
  )
}

export default Header
