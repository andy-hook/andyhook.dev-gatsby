import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { IMetaData, IProjectsData } from "@custom-types/model"

import SEO from "@components/seo"
import HeroContainer from "@components/home/hero/hero.container"
import WorkContainer from "@components/home/work/work.container"
import HomeContainer from "@components/home/home.container"

interface Data {
  socialIconData: IMetaData
  projectsData: IProjectsData
}

const IndexPage: React.FunctionComponent = () => {
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
    <>
      <SEO bodyClasses="page-background-dark" />

      <HomeContainer>
        <HeroContainer
          socialIconData={data.socialIconData.siteMetadata.social}
        />
        <WorkContainer />
      </HomeContainer>
    </>
  )
}

export default IndexPage
