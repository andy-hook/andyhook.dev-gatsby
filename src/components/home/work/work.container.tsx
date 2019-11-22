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
        siteMetadata {
          projects {
            bright {
              label
              desc
              path
            }
            brandwatch {
              label
              desc
              path
            }
            monster {
              label
              desc
              path
            }
            jamieson {
              label
              desc
              path
            }
            sketchbook {
              label
              desc
              path
            }
          }
        }
      }
    }
  `)

  return <Work projectsData={data.projectsData.siteMetadata.projects} />
})

export default WorkContainer
