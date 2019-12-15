import { graphql } from "gatsby"

export const projects = graphql`
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
