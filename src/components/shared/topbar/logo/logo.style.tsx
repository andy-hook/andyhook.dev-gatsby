import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import { themeText } from "@style/theme"

export const LogoWrap = styled.div`
  font-size: 1em;
  width: 1em;
  height: 0.2em;
`

export const LogoLink = styled(Link)`
  display: block;
`

export const LogoLettering = styled.svg`
  display: block;

  & path {
    fill: ${themeText(500)};
  }
`
