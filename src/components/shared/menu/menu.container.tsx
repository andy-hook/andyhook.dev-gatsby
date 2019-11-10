import React, { memo } from "react"
import Menu from "./menu"
import { connect } from "react-redux"
import { IStore } from "@custom-types/store"
import { useStaticQuery, graphql } from "gatsby"
import { IMetaData, IProjectsData } from "model"
import { themes } from "@style/theme"
import { ThemeProvider } from "styled-components"
import { Dispatch } from "redux"
import { menuOpenAction } from "@store/actions"

interface Data {
  socialData: IMetaData
  projectsData: IProjectsData
}

interface DispatchProps {
  closeMenu: () => void
}

interface IStoreProps {
  menuOpen: IStore["menuOpen"]
}

type AllProps = IStoreProps & DispatchProps

const mapStateToProps = ({ menuOpen }: IStore) => {
  return { menuOpen }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    closeMenu: () => {
      dispatch(menuOpenAction(false))
    },
  }
}

const MenuContainer: React.FunctionComponent<AllProps> = memo(
  ({ menuOpen, closeMenu }) => {
    const data: Data = useStaticQuery(graphql`
      query {
        socialData: site {
          siteMetadata {
            social {
              email {
                url
                label
                icon
              }
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
              }
              brandwatch {
                label
                path
              }
              monster {
                label
                path
              }
              jamieson {
                label

                path
              }
              sketchbook {
                label
                path
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
          onScrimClick={closeMenu}
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
