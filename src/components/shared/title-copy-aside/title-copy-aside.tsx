import React, { memo } from "react"
import * as S from "./title-copy-aside.style"

interface Props {
  title: string
  children: string
}

const TitleCopyAside: React.FunctionComponent<Props> = memo(
  ({ title, children }) => (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Body>{children}</S.Body>
    </S.Container>
  )
)

export default TitleCopyAside
