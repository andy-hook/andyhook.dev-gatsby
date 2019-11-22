import React, { memo } from "react"
import { SocialMeta } from "@custom-types/model"
import { keys } from "@custom-types/utils"
import Icon from "@components/shared/icon/icon"
import * as S from "./social.style"

interface Props {
  items: SocialMeta
}

const Social: React.FunctionComponent<Props> = memo(({ items }) => {
  const icons = keys(items).map(key => (
    <S.SocialItem key={key}>
      <S.Link
        aria-label={items[key].label}
        target={items[key].url.includes("mailto:") ? "" : "_blank"}
        href={items[key].url}
      >
        <S.IconPos>
          <Icon name={items[key].icon} />
        </S.IconPos>
      </S.Link>
    </S.SocialItem>
  ))

  return <S.SocialList>{icons}</S.SocialList>
})

export default Social
