import React, { memo } from "react"
import styled from "styled-components"
import { typeTitle, typeSizeDisplayXl } from "@style/typography"
import { themeTone, isDarkTheme } from "@style/theme"
import { zIndex } from "@style/variables"
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
  ${typeSizeDisplayXl}
  ${typeTitle}

  ${isDarkTheme(`text-shadow: 0 0 2em ${themeTone(100)};`)}

  text-align: center;
  max-width: 12em;
  margin-top: 0;
  margin-bottom: 0.75em;

  z-index: ${zIndex.low};
`

export default Details
