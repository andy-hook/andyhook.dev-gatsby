import React from "react"
import { IProjectItem } from "@custom-types/model"
import CoverImageContainer from "@components/shared/cover-image/cover-image.container"
import { Ref } from "@custom-types/ref"
// import { TweenMax } from "gsap"
import * as S from "./header.style"
import SidebarSlide from "@components/shared/sidebar-slide/sidebar-slide.container"
import usePageTransition from "@hooks/page-transition"

interface Props {
  project: IProjectItem
}

const Header: React.FunctionComponent<Props> = ({ project }) => {
  const backgroundRef = React.useRef() as Ref

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
    // if (inView) {
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
    // }
  }

  const { inviewRef } = usePageTransition({
    runInview: {
      onEnter: animateEnter,
      onExit: animateExit,
      onPop: animatePop,
      onEnterFromMenu: animateEnter,
    },
  })

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
