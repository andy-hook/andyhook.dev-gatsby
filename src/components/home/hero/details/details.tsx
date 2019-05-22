import React, { memo } from "react"
import styled from "styled-components"
import { between } from "polished"
import { uniformScale, mq } from "@style/utils"
import {
  emBreakpoints,
  typeScale,
  fontFamily,
  letterSpacing,
  zIndex,
} from "@style/variables"
import Button from "@components/shared/button/button"

interface Props {
  buttonHref: string
}

const Details: React.FunctionComponent<Props> = memo(({ buttonHref }) => {
  return (
    <DetailsContainer>
      <Title>High-performance design & development</Title>
      <Button href={buttonHref}>View my latest projects</Button>
    </DetailsContainer>
  )
})

const DetailsContainer = styled.div`
  display: flex;

  align-items: center;

  flex-direction: column;
`

const Title = styled.h2`
  font-family: ${fontFamily.display};
  font-weight: 600;
  text-align: center;
  color: ${props => props.theme.text[200]};
  letter-spacing: ${letterSpacing.display};
  max-width: 12em;
  text-shadow: 0 0 2em ${props => props.theme.tone[100]};

  margin-top: 0;
  margin-bottom: 0.75em;

  z-index: ${zIndex.low};

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
