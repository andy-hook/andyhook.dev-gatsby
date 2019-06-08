import React, { memo } from "react"
import Menu from "./menu"
import { connect } from "react-redux"
import { IStore } from "@custom-types/store"
import { TThemeType } from "@custom-types/theme"
import { useStaticQuery, graphql } from "gatsby"
import { IMetaData, IProjectsData } from "model"
import { menuOpenAction, setMenuThemeAction } from "@store/actions"
import { Dispatch } from "redux"
import Theme from "@components/shared/theme/theme"

interface Data {
  socialData: IMetaData
  projectsData: IProjectsData
}

export interface DispatchProps {
  setMenuOpen: (isOpen: IStore["menuOpen"]) => void
  setTheme: (themeType: TThemeType) => void
}

export type ContainerProps = Partial<IStore> & DispatchProps

const mapStateToProps = ({
  menuOpen,
  secondaryTheme,
  menuTheme,
  firstEntrance,
}: IStore) => {
  return { menuOpen, secondaryTheme, menuTheme, firstEntrance }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setMenuOpen: (isOpen: boolean) => {
      dispatch(menuOpenAction(isOpen))
    },
    setTheme: (themeType: TThemeType) => {
      dispatch(setMenuThemeAction(themeType))
    },
  }
}

const MenuContainer: React.FunctionComponent<ContainerProps> = memo(
  ({ menuOpen, menuTheme, setMenuOpen, firstEntrance, setTheme }) => {
    const theme = menuTheme as TThemeType

    const data: Data = useStaticQuery(graphql`
      query {
        socialData: site {
          siteMetadata {
            social {
              email {
                url
                label
              }
              twitter {
                url
                label
              }
              instagram {
                url
                label
              }
              dribbble {
                url
                label
              }
              github {
                url
                label
              }
              linkedin {
                url
                label
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
      <Theme themeType={theme}>
        <Menu
          open={menuOpen}
          currentTheme={theme}
          projects={data.projectsData.siteMetadata.projects}
          social={data.socialData.siteMetadata.social}
          setMenuOpen={setMenuOpen}
          firstEntrance={firstEntrance}
          setTheme={setTheme}
        />
      </Theme>
    )
  }
)

const ConnectedMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer)

export default ConnectedMenu
