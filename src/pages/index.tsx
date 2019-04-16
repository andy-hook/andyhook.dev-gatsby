import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

import { SocialData } from "../types"

import SEO from "../components/seo"
import Splash from "../components/splash/splash"

const IndexPage: React.FunctionComponent = () => {
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

  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Splash socialIconData={data.allSocialJson.edges} />
    </>
  )
}

export default IndexPage
