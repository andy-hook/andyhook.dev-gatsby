import React, { memo } from "react"
import { typeTitle, typeSizeDisplayMd } from "@style/typography"
import styled from "styled-components"
import { keys } from "@custom-types/utils"
import { TProjects } from "model"
import Link from "gatsby-plugin-transition-link"
import { scaleBetween, mq } from "@style/media-queries"

interface Props {
  projectDataList: TProjects
  onClick: () => void
}

const ProjectListComponent: React.FunctionComponent<Props> = memo(
  ({ projectDataList, onClick }) => {
    const projectItems = keys(projectDataList).map((key, index) => (
      <ProjectListItem key={index}>
        <ProjectLink
          onClick={onClick}
          to={projectDataList[key].path}
          exit={{
            length: 0,
          }}
          entry={{
            length: 0.75,
            state: {
              animType: "enter-from-nav",
            },
          }}
        >
          {projectDataList[key].label}
        </ProjectLink>
      </ProjectListItem>
    ))
    return <ProjectList>{projectItems}</ProjectList>
  }
)

const projectItemPadding = "0.22em"

const ProjectList = styled.ul`
  ${typeSizeDisplayMd}
  margin-top: -${projectItemPadding};
  margin-bottom: 1.75em;

  ${mq.greaterThan("topPalm")`
    flex-direction: column;

    margin-bottom: -${projectItemPadding};
  `}
`

const ProjectListItem = styled.li`
  min-width: 8em;
  margin-right: 6em;

  ${scaleBetween("margin-right", "2.75rem", "11.4rem", "topPalm", "bottomLap")}
`

const ProjectLink = styled(Link)`
  ${typeTitle}

  display: block;
  padding-top: ${projectItemPadding};
  padding-bottom: ${projectItemPadding};
`

export default ProjectListComponent
