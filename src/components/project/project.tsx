import React from "react"
import styled from "styled-components"
import ContentScrollContainer from "@components/shared/content-scroll/content-scroll.container"
import Header from "@components/project/header/header"
import NextProject from "@components/project/next-project/next-project"
import { IProjects } from "@custom-types/model"
import { ContainerProps } from "./project.container"
import { getCurrentProjectData, getNextProjectData } from "./utils/utils"
import { themeTone } from "@style/theme"

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
        <TempIntroImage />
        {children}
        <NextProject project={getNextProjectData(projectData, projectName)} />
      </ProjectContainer>
    </ContentScrollContainer>
  )
}

const ProjectContainer = styled.article`
  height: 3000px;
`

const TempIntroImage = styled.div`
  background-color: ${themeTone(400)};
  height: 500px;
`

export default Project
