import React, { memo } from "react"
import Work from "./work"
import { IProjectsData } from "@custom-types/model"
import { useStaticQuery, graphql } from "gatsby"

interface Data {
  projectsData: IProjectsData
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
