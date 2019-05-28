import React, { memo, ReactNode } from "react"
import styled, { css } from "styled-components"
import { rem } from "polished"
import { scaleGreaterThan } from "@style/utils"

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

const smallSize = rem("900px")
const mediumSize = rem("1200px")
const largeSize = rem("1550px")

const commonStyles = css`
  margin: auto;
`

const SmallLimiter = styled.div`
  ${commonStyles}

  max-width: ${smallSize};

  ${scaleGreaterThan("max-width", smallSize, "topWall")}
`

const MediumLimiter = styled.div`
  ${commonStyles}

  max-width: ${mediumSize};

  ${scaleGreaterThan("max-width", mediumSize, "topWall")}
`

const LargeLimiter = styled.div`
  ${commonStyles}

  max-width: ${largeSize};

  ${scaleGreaterThan("max-width", largeSize, "topWall")}
`

export default Limiter
