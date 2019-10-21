import React, { memo } from "react"
import Hero from "./hero"
import { IMetaData } from "@custom-types/model"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"

interface Data {
  socialIconData: IMetaData
}

interface IStoreProps {
  firstEntrance: IStore["firstEntrance"]
  loaderVisible: IStore["loaderVisible"]
  menuOpen: IStore["menuOpen"]
}

type AllProps = IStoreProps

const mapStateToProps = ({
  loaderVisible,
  firstEntrance,
  menuOpen,
}: IStore) => {
  return { loaderVisible, firstEntrance, menuOpen }
}

const HeroContainer: React.FunctionComponent<AllProps> = memo(
  ({ loaderVisible, firstEntrance, menuOpen }) => {
    const data: Data = useStaticQuery(graphql`
      query {
        socialIconData: site {
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
      }
    `)

    return (
      <Hero
        socialIconData={data.socialIconData.siteMetadata.social}
        loaderVisible={loaderVisible}
        firstEntrance={firstEntrance}
        menuOpen={menuOpen}
      />
    )
  }
)

const ConnectedHero = connect(mapStateToProps)(HeroContainer)

export default ConnectedHero
