import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { IMetaData, IProjectsData } from "@custom-types/model"

import SEO from "@components/seo"
import HeroContainer from "@components/home/hero/hero.container"
import WorkContainer from "@components/home/work/work.container"

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

      projectsData: site {
        siteMetadata {
          projects {
            bright {
              label
              desc
              path
            }
            brandwatch {
              label
              desc
              path
            }
            monster {
              label
              desc
              path
            }
            jamieson {
              label
              desc
              path
            }
            sketchbook {
              label
              desc
              path
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <HeroContainer socialIconData={data.socialIconData.siteMetadata.social} />
      <WorkContainer projectsData={data.projectsData.siteMetadata.projects} />
    </>
  )
}

export default IndexPage
