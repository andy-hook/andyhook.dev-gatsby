import React, { memo } from "react"
import { keys } from "@custom-types/utils"
import { ISocialMeta } from "model"
import * as S from "./social-list.style"

interface Props {
  socialDataList: ISocialMeta
}

const SocialListComponent: React.FunctionComponent<Props> = memo(
  ({ socialDataList }) => {
    const socialItems = keys(socialDataList).map((key, index) => (
      <S.SocialListItem key={index}>
        <S.SocialLink
          href={socialDataList[key].url}
          target={socialDataList[key].url.includes("mailto:") ? "" : "_blank"}
        >
          {socialDataList[key].label}
        </S.SocialLink>
      </S.SocialListItem>
    ))
    return <S.SocialList>{socialItems}</S.SocialList>
  }
)

export default SocialListComponent
