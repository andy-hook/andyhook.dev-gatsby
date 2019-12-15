import styled from "styled-components"
import { borderRadius } from "@style/variables"
import Link from "gatsby-plugin-transition-link"

export const ProjectCard = styled(Link)`
  display: block;
  padding-top: 125%;
  background-color: grey;
  border-radius: ${borderRadius.base};
`
