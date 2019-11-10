import React, { memo } from "react"
import { keys } from "@custom-types/utils"
import { TProjects } from "model"
import * as S from "./project-list.style"

interface Props {
  projectDataList: TProjects
  onClick: () => void
}

const ProjectListComponent: React.FunctionComponent<Props> = memo(
  ({ projectDataList, onClick }) => {
    const projectItems = keys(projectDataList).map((key, index) => (
      <S.ProjectListItem key={index}>
        <S.ProjectLink
          onClick={onClick}
          to={projectDataList[key].path}
          exit={{
            length: 0,
          }}
          entry={{
            length: 0.75,
            state: {
              animType: "menuEnter",
            },
          }}
        >
          {projectDataList[key].label}
        </S.ProjectLink>
      </S.ProjectListItem>
    ))
    return <S.ProjectList>{projectItems}</S.ProjectList>
  }
)

export default ProjectListComponent
