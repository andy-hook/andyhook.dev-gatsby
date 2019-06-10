import React, { ReactNode, useEffect } from "react"
import Project from "./project"
import { IProjectsData, TProjectNames } from "@custom-types/model"
import { graphql, useStaticQuery } from "gatsby"
import { IStore } from "store"
import { connect } from "react-redux"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"
import { Dispatch } from "redux"
import {
  setTopbarThemeAction,
  setMenuThemeAction,
  menuOpenAction,
} from "@store/actions"
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
  secondaryTheme: IStore["secondaryTheme"]
  firstEntrance: IStore["firstEntrance"]
  loaderVisible: IStore["loaderVisible"]
  topbarTheme: IStore["topbarTheme"]
}

interface DispatchProps {
  setTopbarToSecondaryTheme: () => void
  setMenuToPrimaryTheme: () => void
  closeMenu: () => void
}

const mapStateToProps = ({
  secondaryTheme,
  firstEntrance,
  loaderVisible,
  topbarTheme,
  menuOpen,
}: IStore) => {
  return { secondaryTheme, firstEntrance, loaderVisible, topbarTheme, menuOpen }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setTopbarToSecondaryTheme: () => {
      dispatch(setTopbarThemeAction("secondary-theme"))
    },
    setMenuToPrimaryTheme: () => {
      dispatch(setMenuThemeAction("primary-theme"))
    },
    closeMenu: () => {
      dispatch(menuOpenAction(false))
    },
  }
}

type AllProps = Props & IStoreProps & DispatchProps

const ProjectContainer: React.FunctionComponent<AllProps> = ({
  children,
  projectName,
  secondaryTheme = "light",
  setTopbarToSecondaryTheme,
  setMenuToPrimaryTheme,
  firstEntrance,
  loaderVisible,
  topbarTheme,
  menuOpen,
  closeMenu,
}) => {
  // Set initial theme state on first load for projects as they differ from home
  useEffect(() => {
    if (topbarTheme === "primary-theme") {
      setTopbarToSecondaryTheme()
    }

    // Dispatch close menu action here to ensure the page is mounted before attempting to hide the menu
    // This is a much smoother interaction than dispatching from inside the menu item click handler
    if (menuOpen) {
      closeMenu()
    }
  }, [])

  // Set the menu theme initially providing the menu isn't already open
  useEffect(() => {
    if (!menuOpen) {
      setMenuToPrimaryTheme()
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
    <ThemeProvider theme={themes[secondaryTheme]}>
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

const ConnectedProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer)

export default ConnectedProjectContainer
