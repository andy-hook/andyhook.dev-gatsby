import React, { memo } from "react"
import ProjectsGrid from "./projects-grid"
import { useStaticQuery, graphql } from "gatsby"

const ProjectsGridContainer: React.FunctionComponent = memo(() => {
  const { projectsData } = useStaticQuery(graphql`
    query {
      projectsData: site {
        ...Projects
      }
    }
  `)

  return <ProjectsGrid projects={projectsData.siteMetadata.projects} />
})

export default ProjectsGridContainer
