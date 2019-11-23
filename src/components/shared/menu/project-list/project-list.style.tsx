import { typeTitle } from "@style/typography"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"
import { typeScale } from "@style/variables"

const paddingY = "0.32em"

export const ProjectListOuter = styled.div`
  margin-top: -${paddingY};
  margin-bottom: -${paddingY};
`

export const ProjectList = styled.ul`
  font-size: ${typeScale[8]};

  ${scaleBetween(
    "font-size",
    typeScale[8],
    typeScale[9],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan(
    "font-size",
    typeScale[9],
    "topUltra"
  )}
  
  margin-bottom: 1em;
`

export const ProjectListItem = styled.li``

export const ProjectLink = styled(Link)`
  ${typeTitle}

  display: block;
  padding-top: ${paddingY};
  padding-bottom: ${paddingY};
`
