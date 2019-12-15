import React, { memo } from "react"
import * as S from "./project-card.style"
import CardImageContainer from "@components/shared/card-image/card-image.container"

interface Props {
  title: string
  path: string
  images: string
}

const ProjectCard: React.FunctionComponent<Props> = memo(
  ({ title, path, images }) => (
    <S.ProjectCard to={path}>
      <S.Title>{title}</S.Title>
      <S.BackgroundImage>
        <CardImageContainer imagePath={images} />
      </S.BackgroundImage>
    </S.ProjectCard>
  )
)

export default ProjectCard
