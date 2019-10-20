import React from "react"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  imageObject: FluidObject
}

export const CoverImage: React.FunctionComponent<Props> = ({ imageObject }) => {
  return <Img fluid={imageObject} style={{ height: "100%" }} loading="eager" />
}

export default CoverImage
