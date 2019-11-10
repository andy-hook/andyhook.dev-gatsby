import { typeSizeBaseLg, typeBaseMedium } from "@style/typography"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { themeText } from "@style/theme"

const socialItemPadding = "0.4em"

export const SocialList = styled.ul`
  ${typeSizeBaseLg}
  margin-top: -${socialItemPadding};
  margin-bottom: -${socialItemPadding};
`

export const SocialListItem = styled.li``

export const SocialLink = styled(OutboundLink)`
  ${typeBaseMedium}
  
  /* Offset item padding for clean layout edge */
  padding-top: ${socialItemPadding};
  padding-bottom: ${socialItemPadding};
  padding-right: 2em;

  display: block;
  color: ${themeText(900)};
`
