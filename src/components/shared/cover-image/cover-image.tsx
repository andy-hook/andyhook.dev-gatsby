import React, { useEffect } from "react"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  imageObject: FluidObject
}

export const CoverImage: React.FunctionComponent<Props> = ({ imageObject }) => {
  useEffect(() => {
    console.log(imageObject)
  })

  return <Img fluid={imageObject} style={{ height: "100%" }} />
}

export default CoverImage
