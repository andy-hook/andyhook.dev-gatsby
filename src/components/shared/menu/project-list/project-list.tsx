import React, { memo } from "react"
import { keys } from "@custom-types/utils"
import { Projects } from "model"
import * as S from "./project-list.style"
import {
  TRANSITION_TYPE_MENU_ENTER,
  TRANSITION_TYPE_MENU_EXIT,
} from "@constants"

interface Props {
  projectDataList: Projects
  onClick: () => void
}

const ProjectList: React.FunctionComponent<Props> = memo(
  ({ projectDataList, onClick }) => {
    const projectItems = keys(projectDataList).map((key, index) => {
      return (
        <S.ProjectListItem key={index}>
          <S.ProjectLink
            onClick={onClick}
            to={projectDataList[key].path}
            exit={{
              length: 0,
              state: {
                animType: TRANSITION_TYPE_MENU_EXIT,
              },
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
      )
    })
    return (
      <S.ProjectListOuter>
        <S.ProjectList>{projectItems}</S.ProjectList>
      </S.ProjectListOuter>
    )
  }
)

export default ProjectList
