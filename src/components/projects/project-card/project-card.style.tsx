import styled from "styled-components"
import { borderRadius } from "@style/variables"
import Link from "gatsby-plugin-transition-link"
import { themeTone } from "@style/theme"

export const ProjectCard = styled(Link)`
  position: relative;
  display: block;
  padding-top: 125%;
  background-color: ${themeTone(500)};
  border-radius: ${borderRadius.base};
  overflow: hidden;
`

export const BackgroundImage = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  opacity: 0.1;
`
