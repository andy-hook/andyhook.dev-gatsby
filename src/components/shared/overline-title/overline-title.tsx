import React, { memo } from "react"
import * as S from "./overline-title.style"
import RemoveWidow from "@components/shared/remove-widow/remove-widow"

interface Props {
  overline: string
  children: string
}

const OverlineTitle: React.FunctionComponent<Props> = memo(
  ({ overline, children }) => (
    <>
      <S.Overline>{overline}</S.Overline>
      <S.Title>
        <RemoveWidow>{children}</RemoveWidow>
      </S.Title>
    </>
  )
)

export default OverlineTitle
