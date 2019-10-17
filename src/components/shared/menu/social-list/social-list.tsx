import React, { memo } from "react"
import { typeSizeBaseLg, typeBaseMedium } from "@style/typography"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { themeText } from "@style/theme"
import { keys } from "@custom-types/utils"
import { ISocialMeta } from "model"

interface Props {
  socialDataList: ISocialMeta
}

const SocialListComponent: React.FunctionComponent<Props> = memo(
  ({ socialDataList }) => {
    const socialItems = keys(socialDataList).map((key, index) => (
      <SocialListItem key={index}>
        <SocialLink
          href={socialDataList[key].url}
          target={socialDataList[key].url.includes("mailto:") ? "" : "_blank"}
        >
          {socialDataList[key].label}
        </SocialLink>
      </SocialListItem>
    ))
    return <SocialList>{socialItems}</SocialList>
  }
)

const socialItemPadding = "0.4em"

const SocialList = styled.ul`
  ${typeSizeBaseLg}
  margin-top: -${socialItemPadding};
  margin-bottom: -${socialItemPadding};
`

const SocialListItem = styled.li``

const SocialLink = styled(OutboundLink)`
  ${typeBaseMedium}
  
  /* Offset item padding for clean layout edge */
  padding-top: ${socialItemPadding};
  padding-bottom: ${socialItemPadding};
  padding-right: 2em;

  display: block;
  color: ${themeText(900)};
  `

export default SocialListComponent
