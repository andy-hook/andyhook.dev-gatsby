import styled from "styled-components"
import { typeBodySubtle, typeSizeBaseXs } from "@style/typography"
import Link from "gatsby-plugin-transition-link"

export const List = styled.ul`
  ${typeSizeBaseXs}
`

export const ListItem = styled.li``

export const ListItemLink = styled(Link)`
  ${typeBodySubtle}

  display: block;
`
