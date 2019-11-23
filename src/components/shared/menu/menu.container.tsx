import React, { memo } from "react"
import Menu from "./menu"
import { connect } from "react-redux"
import { Store } from "@custom-types/store"
import { useStaticQuery, graphql } from "gatsby"
import { MetaData, ProjectsData } from "model"
import { themes } from "@style/theme"
import { ThemeProvider } from "styled-components"
import { Dispatch } from "redux"
import { menuOpenAction } from "@store/actions"

interface Data {
  socialData: MetaData
  projectsData: ProjectsData
}

interface DispatchProps {
  dispatchCloseMenuAction: () => void
}

interface StoreProps {
  menuOpen: Store["menuOpen"]
}

type AllProps = StoreProps & DispatchProps

const mapStateToProps = ({ menuOpen }: Store) => {
  return { menuOpen }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatchCloseMenuAction: () => {
      dispatch(menuOpenAction(false))
    },
  }
}

const MenuContainer: React.FunctionComponent<AllProps> = memo(
  ({ menuOpen, dispatchCloseMenuAction }) => {
    const data: Data = useStaticQuery(graphql`
      query {
        socialData: site {
          siteMetadata {
            social {
              twitter {
                url
                label
                icon
              }
              instagram {
                url
                label
                icon
              }
              dribbble {
                url
                label
                icon
              }
              github {
                url
                label
                icon
              }
              linkedin {
                url
                label
                icon
              }
            }
          }
        }

        projectsData: site {
          siteMetadata {
            projects {
              bright {
                label
                path
                images
              }
              brandwatch {
                label
                path
                images
              }
              monster {
                label
                path
                images
              }
              jamieson {
                label
                path
                images
              }
              sketchbook {
                label
                path
                images
              }
            }
          }
        }
      }
    `)
    return (
      <ThemeProvider theme={themes.light}>
        <Menu
          open={menuOpen}
          projects={data.projectsData.siteMetadata.projects}
          social={data.socialData.siteMetadata.social}
          dispatchCloseMenuAction={dispatchCloseMenuAction}
        />
      </ThemeProvider>
    )
  }
)

const ConnectedMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer)

export default ConnectedMenu
