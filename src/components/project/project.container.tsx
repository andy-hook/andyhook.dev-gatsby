import React, { memo, PropsWithChildren } from "react"
import Project from "./project"
import { ProjectsData, ProjectNames } from "@custom-types/model"
import { graphql, useStaticQuery } from "gatsby"
import { Store } from "store"
import { connect } from "react-redux"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import PageContainer from "@components/shared/page/page.container"

interface Data {
  projectsData: ProjectsData
}

interface Props {
  projectName: ProjectNames
}

interface StoreProps {
  firstEntrance: Store["firstEntrance"]
  loaderVisible: Store["loaderVisible"]
}

const mapStateToProps = ({ firstEntrance, loaderVisible }: Store) => {
  return { firstEntrance, loaderVisible }
}

type AllProps = Props & StoreProps

const ProjectContainer: React.FunctionComponent<
  PropsWithChildren<AllProps>
> = memo(({ children, projectName, firstEntrance, loaderVisible }) => {
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
})

const ConnectedProjectContainer = connect(mapStateToProps)(ProjectContainer)

export default ConnectedProjectContainer
