import React, { ReactNode, useEffect, memo } from "react"
import Project from "./project"
import { IProjectsData, TProjectNames } from "@custom-types/model"
import { graphql, useStaticQuery } from "gatsby"
import { IStore } from "store"
import { connect } from "react-redux"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"
import { Dispatch } from "redux"
import { menuOpenAction } from "@store/actions"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import { TransitionPortal } from "gatsby-plugin-transition-link"

interface Data {
  projectsData: IProjectsData
}

interface Props {
  projectName: TProjectNames
  children: ReactNode
}

interface IStoreProps {
  menuOpen: IStore["menuOpen"]
  firstEntrance: IStore["firstEntrance"]
  loaderVisible: IStore["loaderVisible"]
}

interface DispatchProps {
  closeMenu: () => void
}

const mapStateToProps = ({
  firstEntrance,
  loaderVisible,
  menuOpen,
}: IStore) => {
  return { firstEntrance, loaderVisible, menuOpen }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    closeMenu: () => {
      dispatch(menuOpenAction(false))
    },
  }
}

type AllProps = Props & IStoreProps & DispatchProps

const ProjectContainer: React.FunctionComponent<AllProps> = memo(
  ({
    children,
    projectName,
    firstEntrance,
    loaderVisible,
    menuOpen,
    closeMenu,
  }) => {
    useEffect(() => {
      if (menuOpen) {
        // Dispatch close menu action here to ensure the page is mounted before attempting to hide the menu
        // This is a much smoother interaction than dispatching from inside the menu item click handler
        closeMenu()
      }
    }, [])

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
      <ThemeProvider theme={themes.dark}>
        <TransitionPortal>
          <Project
            projectName={projectName}
            projectData={data.projectsData.siteMetadata.projects}
            transitionState={transitionState}
            canPerformIntro={firstEntrance}
            introTrigger={!loaderVisible}
            menuOpen={menuOpen}
          >
            {children}
          </Project>
        </TransitionPortal>
      </ThemeProvider>
    )
  }
)

const ConnectedProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer)

export default ConnectedProjectContainer
