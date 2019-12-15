import React, { memo } from "react"
import Work from "./work"
import { ProjectsData } from "@custom-types/model"
import { useStaticQuery, graphql } from "gatsby"

interface Data {
  projectsData: ProjectsData
}

const WorkContainer: React.FunctionComponent = memo(() => {
  const data: Data = useStaticQuery(graphql`
    query {
      projectsData: site {
        ...Projects
      }
    }
  `)

  return <Work projects={data.projectsData.siteMetadata.projects} />
})

export default WorkContainer
