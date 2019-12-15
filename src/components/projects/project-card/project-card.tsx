import React, { memo } from "react"
import * as S from "./project-card.style"
import CoverImageContainer from "@components/shared/cover-image/cover-image.container"

interface Props {
  title: string
  path: string
  images: string
}

const ProjectCard: React.FunctionComponent<Props> = memo(
  ({ title, path, images }) => (
    <S.ProjectCard to={path}>
      <S.BackgroundImage>
        <CoverImageContainer imagePath={images} />
      </S.BackgroundImage>
      {title}
    </S.ProjectCard>
  )
)

export default ProjectCard