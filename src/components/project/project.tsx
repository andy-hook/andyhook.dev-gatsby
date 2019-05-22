import React from "react"
import styled from "styled-components"
import ContentScrollContainer from "@components/shared/content-scroll/content-scroll.container"
import Header from "@components/project/header/header"
import NextProject from "@components/project/next-project/next-project"
import { IProjects } from "@custom-types/model"
import { ContainerProps } from "./project.container"
import { getCurrentProjectData, getNextProjectData } from "./utils/utils"

interface Props {
  projectData: IProjects
}

type AllProps = Props & ContainerProps

const Project: React.FunctionComponent<AllProps> = ({
  children,
  projectName,
  projectData,
}) => {
  return (
    <ContentScrollContainer>
      <ProjectContainer>
        <Header project={getCurrentProjectData(projectData, projectName)} />
        {children}
        <NextProject project={getNextProjectData(projectData, projectName)} />
      </ProjectContainer>
    </ContentScrollContainer>
  )
}

const ProjectContainer = styled.article`
  height: 3000px;
  background-color: white;
`

export default Project
