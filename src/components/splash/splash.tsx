import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { SocialData } from "../../types"
import Social from "../social/social"

const Splash: React.FunctionComponent = () => {
  const data: SocialData = useStaticQuery(graphql`
    query {
      allSocialJson {
        edges {
          node {
            label
            url
          }
        }
      }
    }
  `)

  return <Social items={data.allSocialJson.edges} />
}

export default Splash
