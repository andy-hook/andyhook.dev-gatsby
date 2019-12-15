import React, { memo } from "react"
import Hero from "./hero"
import { Store } from "@custom-types/store"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"

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
    const { socialIconData } = useStaticQuery(graphql`
      query {
        socialIconData: site {
          ...Social
        }
      }
    `)

    const href = socialIconData.siteMetadata.social.dribbble.url

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
