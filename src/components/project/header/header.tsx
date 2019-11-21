import React, { useEffect } from "react"
import { IProjectItem } from "@custom-types/model"
import CoverImageContainer from "@components/shared/cover-image/cover-image.container"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import { Ref } from "@custom-types/ref"
// import { TweenMax } from "gsap"
import { useInView } from "react-intersection-observer"
import * as S from "./header.style"
import SidebarSlide from "@components/shared/sidebar-slide/sidebar-slide.container"
import {
  TRANSITION_STATUS_POP,
  TRANSITION_STATUS_ENTERING,
  TRANSITION_STATUS_EXITING,
  TRANSITION_TYPE_ENTER,
  TRANSITION_TYPE_EXIT,
} from "@constants"

interface Props {
  project: IProjectItem
}

const Header: React.FunctionComponent<Props> = ({ project }) => {
  const transitionState = useTransitionState()
  const backgroundRef = React.useRef() as Ref
  const [inviewRef, inView] = useInView()

  const animatePop = () => {
    // TweenMax.set(backgroundRef.current, {
    //   opacity: 0.2,
    // })
    // TweenMax.fromTo(
    //   backgroundRef.current,
    //   0.75,
    //   {
    //     scale: 1.05,
    //   },
    //   {
    //     scale: 1,
    //   }
    // )
  }

  const animateEnter = () => {
    // TweenMax.set(backgroundRef.current, {
    //   opacity: 0.2,
    // })
    // TweenMax.fromTo(
    //   backgroundRef.current,
    //   0.75,
    //   {
    //     scale: 1,
    //   },
    //   {
    //     scale: 1,
    //     opacity: 1,
    //   }
    // )
  }

  const animateExit = () => {
    if (inView) {
      // TweenMax.fromTo(
      //   backgroundRef.current,
      //   0.25,
      //   {
      //     y: 0,
      //     opacity: 0.2,
      //   },
      //   {
      //     y: 40,
      //     opacity: 0,
      //   }
      // )
    }
  }

  useEffect(() => {
    const { transitionStatus, exit, entry } = transitionState

    switch (transitionStatus) {
      case TRANSITION_STATUS_POP:
        animatePop()
        break
      case TRANSITION_STATUS_ENTERING:
        switch (entry.state.animType) {
          case TRANSITION_TYPE_ENTER:
            animateEnter()

            break
          // This clause works around bug with pushstate and history navigation
          // Hopefully this can be resolved and pop will run consistently
          // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
          default:
            animatePop()
        }
        break
      case TRANSITION_STATUS_EXITING:
        switch (exit.state.animType) {
          case TRANSITION_TYPE_EXIT:
            animateExit()

            break
        }
        break
    }
  }, [transitionState.transitionStatus])

  return (
    <SidebarSlide>
      <S.Container ref={inviewRef}>
        <S.BackgroundImage ref={backgroundRef}>
          <CoverImageContainer imagePath={project.images} />
        </S.BackgroundImage>
      </S.Container>
    </SidebarSlide>
  )
}

export default Header
