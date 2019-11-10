import { typeTitle } from "@style/typography"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import { typeScale } from "@style/variables"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"

export const ProjectList = styled.ul`
  font-size: ${typeScale[8]};

  ${scaleBetween(
    "font-size",
    typeScale[8],
    typeScale[9],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[9], "topUltra")}
`

export const ProjectListItem = styled.li``

export const ProjectLink = styled(Link)`
  ${typeTitle}

  display: block;
  padding-top: 0.22em;
  padding-bottom: 0.22em;
`
