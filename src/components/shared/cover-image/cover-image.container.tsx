import React from "react"
import { IProjectItem } from "@custom-types/model"
import { graphql, useStaticQuery } from "gatsby"
import CoverImage from "./cover-image"

interface Props {
  imagePath: IProjectItem["images"]
}

const CoverImageContainer: React.FunctionComponent<Props> = ({ imagePath }) => {
  const data = useStaticQuery(graphql`
    query {
      bright: file(relativePath: { eq: "project/bright/cover-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      brandwatch: file(
        relativePath: { eq: "project/brandwatch/cover-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      monster: file(relativePath: { eq: "project/monster/cover-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      jamieson: file(relativePath: { eq: "project/jamieson/cover-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sketchbook: file(
        relativePath: { eq: "project/sketchbook/cover-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return <CoverImage imageObject={data[imagePath].childImageSharp.fluid} />
}

export default CoverImageContainer
