import React, { MutableRefObject } from "react"
import { ProjectItem } from "@custom-types/model"
import CoverImageContainer from "@components/shared/cover-image/cover-image.container"
import * as S from "./header.style"

interface Props {
  project: ProjectItem
}

const Header: React.FunctionComponent<Props> = ({ project }) => {
  const backgroundRef = React.useRef() as MutableRefObject<HTMLElement>

  return (
    <S.Container>
      <S.BackgroundImage ref={backgroundRef}>
        <CoverImageContainer imagePath={project.images} />
      </S.BackgroundImage>
    </S.Container>
  )
}

export default Header
