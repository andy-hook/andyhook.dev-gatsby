import { typeTitle } from "@style/typography"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"

export const ProjectList = styled.ul``

export const ProjectListItem = styled.li``

export const ProjectLink = styled(Link)`
  ${typeTitle}

  display: block;
  padding-top: 0.22em;
  padding-bottom: 0.22em;
`
