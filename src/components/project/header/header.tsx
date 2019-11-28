import React, { MutableRefObject } from "react"
import { ProjectItem } from "@custom-types/model"
import CoverImageContainer from "@components/shared/cover-image/cover-image.container"
import * as S from "./header.style"
import usePageTransition from "@hooks/page-transition"

interface Props {
  project: ProjectItem
}

const Header: React.FunctionComponent<Props> = ({ project }) => {
  const backgroundRef = React.useRef() as MutableRefObject<HTMLElement>

  const animatePop = () => {}

  const animateEnter = () => {}

  const animateExit = () => {}

  const { inviewRef } = usePageTransition({
    runInview: {
      onEnter: animateEnter,
      onExit: animateExit,
      onPop: animatePop,
      onEnterFromMenu: animateEnter,
    },
  })

  return (
    <S.Container ref={inviewRef}>
      <S.BackgroundImage ref={backgroundRef}>
        <CoverImageContainer imagePath={project.images} />
      </S.BackgroundImage>
    </S.Container>
  )
}

export default Header
