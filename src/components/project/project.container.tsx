import React, { ReactNode } from "react"
import Project from "./project"
import { IProjectsData } from "@custom-types/model"
import { graphql, useStaticQuery } from "gatsby"

interface Data {
  projectsData: IProjectsData
}

interface Props {
  projectName: string
  children: ReactNode
}

export type ContainerProps = Props

const ProjectContainer: React.FunctionComponent<Props> = ({
  children,
  projectName,
}) => {
  const data: Data = useStaticQuery(graphql`
    query {
      projectsData: site {
        siteMetadata {
          projects {
            bright {
              label
              desc
              path
              details {
                role
                location
                date
              }
            }
            brandwatch {
              label
              desc
              path
              details {
                role
                location
                date
              }
            }
            monster {
              label
              desc
              path
              details {
                role
                location
                date
              }
            }
            jamieson {
              label
              desc
              path
              details {
                role
                location
                date
              }
            }
            sketchbook {
              label
              desc
              path
              details {
                role
                location
                date
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Project
      projectName={projectName}
      projectData={data.projectsData.siteMetadata.projects}
    >
      {children}
    </Project>
  )
}

export default ProjectContainer
