import { typeTitle } from "@style/typography"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"
import { typeScale } from "@style/variables"

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

export const ProjectListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.25em;
  }
`

export const ProjectLink = styled(Link)`
  ${typeTitle}

  display: block;
  padding-top: 0.22em;
  padding-bottom: 0.22em;
`
