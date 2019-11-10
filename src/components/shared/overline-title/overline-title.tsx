import React, { memo, ReactNode } from "react"
import * as S from "./overline-title.style"

interface Props {
  overline: string
  children: ReactNode
}

const OverlineTitle: React.FunctionComponent<Props> = memo(
  ({ overline, children }) => (
    <div>
      <S.Overline>{overline}</S.Overline>
      <S.Title>{children}</S.Title>
    </div>
  )
)

export default OverlineTitle
