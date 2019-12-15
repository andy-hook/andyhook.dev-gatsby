import React, { memo } from "react"
import * as S from "./project-card.style"

interface Props {
  title: string
}

const ProjectCard: React.FunctionComponent<Props> = memo(({ title }) => (
  <S.ProjectCard>{title}</S.ProjectCard>
))

export default ProjectCard
