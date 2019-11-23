import React, { memo } from "react"
import { keys } from "@custom-types/utils"
import { Projects } from "model"
import * as S from "./project-list.style"
import { TRANSITION_TYPE_MENU_ENTER } from "@constants"

interface Props {
  projectDataList: Projects
  onClick: () => void
  onHover: (index: number) => void
  onLeave: () => void
}

const ProjectList: React.FunctionComponent<Props> = memo(
  ({ projectDataList, onClick, onHover, onLeave }) => {
    const projectItems = keys(projectDataList).map((key, index) => {
      const onHoverHandler = () => {
        onHover(index)
      }

      return (
        <S.ProjectListItem key={index}>
          <S.ProjectLink
            onMouseEnter={onHoverHandler}
            onMouseOut={onLeave}
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
