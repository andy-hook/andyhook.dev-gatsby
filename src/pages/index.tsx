import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { IMetaData } from "../types/model"

import SEO from "../components/seo"
import SplashContainer from "../components/splash/splash-container"

interface Data {
  socialIconData: IMetaData
}

const IndexPage: React.FunctionComponent = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      socialIconData: site {
        siteMetadata {
          social {
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
      <SplashContainer
        socialIconData={data.socialIconData.siteMetadata.social}
      />
    </>
  )
}

export default IndexPage
