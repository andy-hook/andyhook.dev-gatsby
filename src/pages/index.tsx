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
        buttonHref={data.socialIconData.siteMetadata.social.dribbble.url}
      />
    </>
  )
}

export default IndexPage
