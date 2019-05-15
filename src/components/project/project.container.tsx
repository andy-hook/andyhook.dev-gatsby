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
