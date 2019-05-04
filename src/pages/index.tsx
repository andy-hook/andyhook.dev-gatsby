import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { IMetaData } from "@custom-types/model"

import SEO from "@components/seo"
import Hero from "@components/home/hero/hero.container"

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
      <SEO />
      <Hero socialIconData={data.socialIconData.siteMetadata.social} />
    </>
  )
}

export default IndexPage
