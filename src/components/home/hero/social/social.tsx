import React, { memo } from "react"
import { ISocialMeta } from "@custom-types/model"
import { keys } from "@custom-types/utils"
import Icon from "@components/shared/icon/icon"
import classNames from "classnames"
import * as S from "./social.style"

interface Props {
  items: ISocialMeta
  className?: string
  visible?: boolean
}

const Social: React.FunctionComponent<Props> = memo(({ items, className }) => {
  const icons = keys(items).map(key => (
    <S.Link
      key={key}
      aria-label={items[key].label}
      target={items[key].url.includes("mailto:") ? "" : "_blank"}
      href={items[key].url}
    >
      <S.IconPos>
        <Icon name={items[key].icon} />
      </S.IconPos>
    </S.Link>
  ))

  return (
    <S.Restricter className={classNames("", className)}>{icons}</S.Restricter>
  )
})

export default Social
