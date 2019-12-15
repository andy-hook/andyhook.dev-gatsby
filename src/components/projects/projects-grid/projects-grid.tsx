import React, { memo } from "react"
import * as S from "./projects-grid.style"
import ProjectCard from "@components/projects/project-card/project-card"
import { Projects } from "model"
import { keys } from "@custom-types/utils"

interface Props {
  projects: Projects
}

const ProjectsGrid: React.FunctionComponent<Props> = memo(({ projects }) => {
  const renderItems = keys(projects).map((key, index) => {
    const item = projects[key]

    return (
      <S.GridItem key={index}>
        <ProjectCard path={item.path} title={item.label} />
      </S.GridItem>
    )
  })

  return <S.Grid>{renderItems}</S.Grid>
})

export default ProjectsGrid
