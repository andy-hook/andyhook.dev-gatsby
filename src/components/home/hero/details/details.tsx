import React, { memo } from "react"
import styled from "styled-components"
import { between } from "polished"
import { uniformScale, mq } from "@style/utils"
import {
  emBreakpoints,
  typeScale,
  fontFamily,
  letterSpacing,
} from "@style/variables"
import Button from "@components/shared/button/button"

interface Props {
  buttonHref: string
}

const Details: React.FunctionComponent<Props> = memo(({ buttonHref }) => {
  return (
    <>
      <Title>High-performance design & development</Title>
      <Button href={buttonHref} />
    </>
  )
})

const Title = styled.h2`
  font-family: ${fontFamily.display};
  font-weight: 600;
  text-align: center;
  color: #e3e3eb;
  padding-left: 0.75em;
  padding-right: 0.75em;
  letter-spacing: ${letterSpacing.display};
  max-width: 13em;
  text-shadow: 0px 0px 2em #08080a;

  margin-top: 0;
  margin-bottom: 0.75em;

  z-index: 1;

  font-size: ${typeScale[9]};

  ${mq.between("bottomThumb", "bottomDesk")`
    font-size: ${between(
      typeScale[9],
      typeScale[11],
      emBreakpoints.bottomThumb,
      emBreakpoints.bottomDesk
    )};
  `}

  ${mq.between("topDesk", "bottomUltra")`
    font-size: ${between(
      typeScale[11],
      typeScale[12],
      emBreakpoints.bottomDesk,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(typeScale[12], "topUltra")};
  `}
`

export default Details
