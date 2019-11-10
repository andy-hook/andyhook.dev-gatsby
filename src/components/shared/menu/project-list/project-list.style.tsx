import { typeTitle, typeSizeDisplayMd } from "@style/typography"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import { scaleBetween, mq } from "@style/media-queries"

export const projectItemPadding = "0.22em"

export const ProjectList = styled.ul`
  ${typeSizeDisplayMd}
  margin-top: -${projectItemPadding};
  margin-bottom: 1.75em;

  ${mq.greaterThan("topPalm")`
    flex-direction: column;

    margin-bottom: -${projectItemPadding};
  `}
`

export const ProjectListItem = styled.li`
  min-width: 8em;
  margin-right: 6em;

  ${scaleBetween("margin-right", "2.75rem", "11.4rem", "topPalm", "bottomLap")}
`

export const ProjectLink = styled(Link)`
  ${typeTitle}

  display: block;
  padding-top: ${projectItemPadding};
  padding-bottom: ${projectItemPadding};
`
