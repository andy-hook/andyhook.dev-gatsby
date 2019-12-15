import React, { memo } from "react"
import ProjectsGrid from "./projects-grid"
import { ProjectsData } from "@custom-types/model"
import { useStaticQuery, graphql } from "gatsby"

interface Data {
  projectsData: ProjectsData
}

const ProjectsGridContainer: React.FunctionComponent = memo(() => {
  const data: Data = useStaticQuery(graphql`
    query {
      projectsData: site {
        ...Projects
      }
    }
  `)

  return <ProjectsGrid projects={data.projectsData.siteMetadata.projects} />
})

export default ProjectsGridContainer
