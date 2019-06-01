import React, { ReactNode } from "react"
import Project from "./project"
import { IProjectsData, TProjectNames } from "@custom-types/model"
import { graphql, useStaticQuery } from "gatsby"
import { IStore } from "store"
import { connect } from "react-redux"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"

interface Data {
  projectsData: IProjectsData
}

interface Props {
  projectName: TProjectNames
  children: ReactNode
}

const mapStateToProps = ({ secondaryTheme }: IStore) => {
  return { secondaryTheme }
}

export type ContainerProps = Props & Partial<IStore>

const ProjectContainer: React.FunctionComponent<ContainerProps> = ({
  children,
  projectName,
  secondaryTheme = "light",
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
              contents {
                label
                key
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
              contents {
                label
                key
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
              contents {
                label
                key
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
              contents {
                label
                key
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
              contents {
                label
                key
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={themes[secondaryTheme]}>
      <Project
        projectName={projectName}
        projectData={data.projectsData.siteMetadata.projects}
      >
        {children}
      </Project>
    </ThemeProvider>
  )
}

const ConnectedProjectContainer = connect(mapStateToProps)(ProjectContainer)

export default ConnectedProjectContainer
