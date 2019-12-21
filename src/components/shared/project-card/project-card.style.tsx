import styled from "styled-components"
import { borderRadius, zIndex } from "@style/variables"
import Link from "gatsby-plugin-transition-link"
import { themeTone } from "@style/theme"
import { typeTitle, typeSizeDisplayMd } from "@style/typography"

export const ProjectCard = styled(Link)`
  position: relative;
  display: block;
  padding-top: 125%;
  background-color: ${themeTone(500)};
  border-radius: ${borderRadius.base};
  overflow: hidden;
`

export const Title = styled.h3`
  ${typeTitle}
  ${typeSizeDisplayMd}

  position: absolute;

  bottom: 0;
  left: 0;
  z-index: ${zIndex.low};

  padding: 1.5em;
`

export const BackgroundImage = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  opacity: 0.1;

  z-index: ${zIndex.floor};
`
