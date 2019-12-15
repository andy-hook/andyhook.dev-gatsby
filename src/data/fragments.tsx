import { graphql } from "gatsby"

export const Projects = graphql`
  fragment Projects on Site {
    siteMetadata {
      projects {
        bright {
          label
          desc
          path
          images
        }
        brandwatch {
          label
          desc
          path
          images
        }
        monster {
          label
          desc
          path
          images
        }
        cymbiosis {
          label
          desc
          path
          images
        }
        jamieson {
          label
          desc
          path
          images
        }
        sketchbook {
          label
          desc
          path
          images
        }
      }
    }
  }
`

export const Social = graphql`
  fragment Social on Site {
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
`
