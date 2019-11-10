import React, { memo } from "react"
import Menu from "./menu"
import { connect } from "react-redux"
import { IStore } from "@custom-types/store"
import { useStaticQuery, graphql } from "gatsby"
import { IMetaData, IProjectsData } from "model"
import { themes } from "@style/theme"
import { ThemeProvider } from "styled-components"

interface Data {
  socialData: IMetaData
  projectsData: IProjectsData
}

interface IStoreProps {
  menuOpen: IStore["menuOpen"]
}

type AllProps = IStoreProps

const mapStateToProps = ({ menuOpen }: IStore) => {
  return { menuOpen }
}

const MenuContainer: React.FunctionComponent<AllProps> = memo(
  ({ menuOpen }) => {
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
      <ThemeProvider theme={themes.light}>
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
