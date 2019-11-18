import React, { ReactNode, memo } from "react"
import Project from "./project"
import { IProjectsData, TProjectNames } from "@custom-types/model"
import { graphql, useStaticQuery } from "gatsby"
import { IStore } from "store"
import { connect } from "react-redux"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import PageContainer from "@components/shared/page/page.container"

interface Data {
  projectsData: IProjectsData
}

interface Props {
  projectName: TProjectNames
  children: ReactNode
}

interface IStoreProps {
  firstEntrance: IStore["firstEntrance"]
  loaderVisible: IStore["loaderVisible"]
}

const mapStateToProps = ({ firstEntrance, loaderVisible }: IStore) => {
  return { firstEntrance, loaderVisible }
}

type AllProps = Props & IStoreProps

const ProjectContainer: React.FunctionComponent<AllProps> = memo(
  ({ children, projectName, firstEntrance, loaderVisible }) => {
    const transitionState = useTransitionState()

    const data: Data = useStaticQuery(graphql`
      query {
        projectsData: site {
          siteMetadata {
            projects {
              bright {
                label
                desc
                path
                images
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
                images
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
                images
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
                images
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
                images
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
      <PageContainer>
        <ThemeProvider theme={themes.dark}>
          <Project
            projectName={projectName}
            projectData={data.projectsData.siteMetadata.projects}
            transitionState={transitionState}
            canPerformIntro={firstEntrance}
            introTrigger={!loaderVisible}
          >
            {children}
          </Project>
        </ThemeProvider>
      </PageContainer>
    )
  }
)

const ConnectedProjectContainer = connect(mapStateToProps)(ProjectContainer)

export default ConnectedProjectContainer
