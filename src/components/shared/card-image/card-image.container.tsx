import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import CardImage from "./card-image"

interface Props {
  imagePath: string
}

const CoverImageContainer: React.FunctionComponent<Props> = ({ imagePath }) => {
  const data = useStaticQuery(graphql`
    query {
      bright: file(relativePath: { eq: "project/bright/card-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      brandwatch: file(
        relativePath: { eq: "project/brandwatch/card-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      monster: file(relativePath: { eq: "project/monster/card-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cymbiosis: file(
        relativePath: { eq: "project/cymbiosis/card-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      jamieson: file(relativePath: { eq: "project/jamieson/card-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      experiments: file(
        relativePath: { eq: "project/experiments/card-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <CardImage imageObject={data[imagePath].childImageSharp.fluid} />
}

export default CoverImageContainer
