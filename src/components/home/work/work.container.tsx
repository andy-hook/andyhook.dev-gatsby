import React, { memo } from "react"
import Work from "./work"
import { useStaticQuery, graphql } from "gatsby"

const WorkContainer: React.FunctionComponent = memo(() => {
  const { projectsData } = useStaticQuery(graphql`
    query {
      projectsData: site {
        ...Projects
      }
    }
  `)

  return <Work projects={projectsData.siteMetadata.projects} />
})

export default WorkContainer
