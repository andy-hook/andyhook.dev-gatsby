import React, { memo, ReactNode, Ref } from "react"
import * as S from "./gutter.style"
interface Props {
  children: ReactNode
}

const Gutter: React.FunctionComponent<Props> = memo(
  React.forwardRef(({ children }, ref: Ref<HTMLDivElement>) => {
    return <S.GutterContainer ref={ref}>{children}</S.GutterContainer>
  })
)

export default Gutter
