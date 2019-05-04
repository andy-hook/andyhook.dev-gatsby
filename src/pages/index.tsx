import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { IMetaData } from "@custom-types/model"

import SEO from "@components/seo"
import HeroContainer from "@components/home/hero/hero.container"
import { TransitionState } from "gatsby-plugin-transition-link"
import { ItransitionProps } from "@custom-types/gatsby-plugin-transition-link"

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
    <TransitionState>
      {(transitionProps: ItransitionProps) => {
        return (
          <>
            <SEO />
            <HeroContainer
              socialIconData={data.socialIconData.siteMetadata.social}
              transitionProps={transitionProps}
            />
          </>
        )
      }}
    </TransitionState>
  )
}

export default IndexPage
