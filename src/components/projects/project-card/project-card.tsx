import React, { memo } from "react"
import * as S from "./project-card.style"

interface Props {
  title: string
  path: string
}

const ProjectCard: React.FunctionComponent<Props> = memo(({ title, path }) => (
  <S.ProjectCard to={path}>{title}</S.ProjectCard>
))

export default ProjectCard
