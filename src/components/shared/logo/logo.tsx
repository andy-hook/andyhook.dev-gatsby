import React, { memo } from "react"
import styled from "styled-components"
import { between } from "polished"
import { uniformScale, mq } from "@style/utils"
import mark from "@images/svg-import/mark.svg"
import {
  emBreakpoints,
  typeScale,
  fontWeight,
  letterSpacing,
  fontFamily,
} from "@style/variables"

const Logo: React.FunctionComponent = memo(() => {
  return (
    <LogoInner href="/">
      <LogoMark />
      <LogoTitle>Andy Hook</LogoTitle>
      <LogoSubtle>Interface Developer</LogoSubtle>
    </LogoInner>
  )
})

const LogoInner = styled.a`
  display: flex;
  align-items: center;
  font-family: ${fontFamily.base};
  color: white;
  font-size: ${typeScale[1]};
  font-weight: ${fontWeight.base.medium};

  text-decoration: none;

  letter-spacing: ${letterSpacing.base};

  &:focus {
    outline: none;
  }

  ${mq.greaterThan("bottomThumb")`
    margin-left: -1.5em;
  `}

  ${mq.between("bottomThumb", "bottomUltra")`
    font-size: ${between(
      typeScale[1],
      typeScale[2],
      emBreakpoints.bottomThumb,
      emBreakpoints.bottomUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(typeScale[2], "topUltra")};
  `}
`

const LogoMark = styled(mark)`
  font-size: 4.5em;
  width: 1em;
  height: 1em;
`

const LogoTitle = styled.span`
  margin-left: 1.5em;
  margin-right: 0.5em;

  ${mq.lessThan("bottomThumb")`
    display: none;
  `}
`

const LogoSubtle = styled.span`
  opacity: 0.4;

  ${mq.lessThan("bottomThumb")`
    display: none;
  `}
`

export default Logo
