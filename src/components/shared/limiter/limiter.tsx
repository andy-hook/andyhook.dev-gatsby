import React, { memo, ReactNode } from "react"
import * as S from "./limiter.style"

interface Props {
  size?: "small" | "medium" | "large"
  children: ReactNode
}

const Limiter: React.FunctionComponent<Props> = memo(
  ({ size = "medium", children }) => {
    const renderLimiter = () => {
      switch (size) {
        case "small":
          return <S.SmallLimiter>{children}</S.SmallLimiter>
        case "medium":
          return <S.MediumLimiter>{children}</S.MediumLimiter>
        case "large":
          return <S.LargeLimiter>{children}</S.LargeLimiter>
      }
    }

    return <>{renderLimiter()}</>
  }
)

export default Limiter
