import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import CoverImage from "./cover-image"

interface Props {
  imagePath: string
}

const CoverImageContainer: React.FunctionComponent<Props> = ({ imagePath }) => {
  const data = useStaticQuery(graphql`
    query {
      bright: file(relativePath: { eq: "project/bright/cover-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      brandwatch: file(
        relativePath: { eq: "project/brandwatch/cover-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      monster: file(relativePath: { eq: "project/monster/cover-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cymbiosis: file(
        relativePath: { eq: "project/cymbiosis/cover-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      jamieson: file(relativePath: { eq: "project/jamieson/cover-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      experiments: file(
        relativePath: { eq: "project/experiments/cover-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <CoverImage imageObject={data[imagePath].childImageSharp.fluid} />
}

export default CoverImageContainer
