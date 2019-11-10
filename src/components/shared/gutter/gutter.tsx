import React, { memo, ReactNode } from "react"
import * as S from "./gutter.style"

interface Props {
  children: ReactNode
}

const Gutter: React.FunctionComponent<Props> = memo(({ children }) => {
  return <S.GutterContainer>{children}</S.GutterContainer>
})

export default Gutter
