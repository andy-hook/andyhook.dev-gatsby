import React, { memo } from "react"
import Hero from "./hero"
import { MetaData } from "@custom-types/model"
import { Store } from "@custom-types/store"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"

interface Data {
  socialIconData: MetaData
}

interface StoreProps {
  firstEntrance: Store["firstEntrance"]
  loaderVisible: Store["loaderVisible"]
}

type AllProps = StoreProps

const mapStateToProps = ({ loaderVisible, firstEntrance }: Store) => {
  return { loaderVisible, firstEntrance }
}

const HeroContainer: React.FunctionComponent<AllProps> = memo(
  ({ loaderVisible, firstEntrance }) => {
    const data: Data = useStaticQuery(graphql`
      query {
        socialIconData: site {
          siteMetadata {
            social {
              dribbble {
                url
                label
                icon
              }
            }
          }
        }
      }
    `)

    const href = data.socialIconData.siteMetadata.social.dribbble.url

    return (
      <Hero
        buttonHref={href}
        loaderVisible={loaderVisible}
        firstEntrance={firstEntrance}
      />
    )
  }
)

const ConnectedHero = connect(mapStateToProps)(HeroContainer)

export default ConnectedHero
