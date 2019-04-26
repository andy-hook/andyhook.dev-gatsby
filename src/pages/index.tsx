import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { SocialData } from "../types/model"

import SEO from "../components/seo"
import Splash from "../components/splash/splash"

interface Data {
  all: SocialData
  dribbble: SocialData
}

const IndexPage: React.FunctionComponent = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      all: allSocialJson {
        edges {
          node {
            label
            url
          }
        }
      }

      dribbble: allSocialJson(filter: { label: { eq: "dribbble" } }) {
        edges {
          node {
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO
        keywords={[
          `User interface`,
          `Web developer`,
          `Front-end developer`,
          `Digital designer`,
          `Web designer`,
          `Brighton`,
        ]}
      />
      <Splash
        socialIconData={data.all.edges}
        buttonHref={data.dribbble.edges[0].node.url}
      />
    </>
  )
}

export default IndexPage
