import React from "react"
import Img, { FluidObject } from "gatsby-image"
import * as S from "./about-hero.style"

interface Props {
  imageObject: FluidObject
}

export const AboutHero: React.FunctionComponent<Props> = ({ imageObject }) => {
  return (
    <S.ImagePosition>
      <Img fluid={imageObject} loading="eager" />
    </S.ImagePosition>
  )
}

export default AboutHero
