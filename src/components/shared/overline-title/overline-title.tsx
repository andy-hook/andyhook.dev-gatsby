import React, { memo } from "react"
import * as S from "./overline-title.style"

interface Props {
  overline: string
}

const OverlineTitle: React.FunctionComponent<Props> = memo(
  ({ overline, children }) => (
    <>
      <S.Overline>{overline}</S.Overline>
      <S.Title>{children}</S.Title>
    </>
  )
)

export default OverlineTitle
