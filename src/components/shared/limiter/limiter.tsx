import React, { memo, ReactNode } from "react"
import styled from "styled-components"

interface Props {
  size?: "small" | "medium" | "large"
  children: ReactNode
}

const Limiter: React.FunctionComponent<Props> = memo(
  ({ size = "medium", children }) => {
    const renderLimiter = () => {
      switch (size) {
        case "small":
          return <SmallLimiter>{children}</SmallLimiter>
        case "medium":
          return <MediumLimiter>{children}</MediumLimiter>
        case "large":
          return <LargeLimiter>{children}</LargeLimiter>
      }
    }

    return <>{renderLimiter()}</>
  }
)

const SmallLimiter = styled.div<Props>`
  max-width: 500px;
`

const MediumLimiter = styled.div<Props>`
  max-width: 700px;
`

const LargeLimiter = styled.div<Props>`
  max-width: 700px;
`

export default Limiter
