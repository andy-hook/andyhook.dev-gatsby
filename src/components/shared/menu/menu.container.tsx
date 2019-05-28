import React, { memo } from "react"
import Menu from "./menu"
import { connect } from "react-redux"
import { IStore } from "@custom-types/store"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"
import { useStaticQuery, graphql } from "gatsby"
import { IMetaData, IProjectsData } from "model"

type ContainerProps = Partial<IStore>

interface Data {
  socialData: IMetaData
  projectsData: IProjectsData
}

const mapStateToProps = ({ menuOpen, secondaryTheme }: IStore) => {
  return { menuOpen, secondaryTheme }
}

const MenuContainer: React.FunctionComponent<ContainerProps> = memo(
  ({ menuOpen, secondaryTheme = "light" }) => {
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
      <ThemeProvider theme={themes[secondaryTheme]}>
        <Menu
          open={menuOpen}
          projects={data.projectsData.siteMetadata.projects}
          social={data.socialData.siteMetadata.social}
        />
      </ThemeProvider>
    )
  }
)

const ConnectedMenu = connect(mapStateToProps)(MenuContainer)

export default ConnectedMenu
