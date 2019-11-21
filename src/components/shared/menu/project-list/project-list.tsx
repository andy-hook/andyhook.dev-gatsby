import React, { memo } from "react"
import { keys } from "@custom-types/utils"
import { TProjects } from "model"
import * as S from "./project-list.style"
import { TRANSITION_TYPE_MENU_ENTER } from "@constants"

interface Props {
  projectDataList: TProjects
  onClick: () => void
}

const ProjectList: React.FunctionComponent<Props> = memo(
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
              animType: TRANSITION_TYPE_MENU_ENTER,
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

export default ProjectList
