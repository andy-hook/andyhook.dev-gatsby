import styled from "styled-components"
import { typeTitle, typeSizeDisplayXl } from "@style/typography"
import { zIndex, textShadow } from "@style/variables"

export const DetailsContainer = styled.div`
  display: flex;

  align-items: center;

  flex-direction: column;
`

export const Title = styled.h2`
  ${typeSizeDisplayXl}
  ${typeTitle}
  
  text-align: center;
  max-width: 12em;
  margin-top: 0;
  margin-bottom: 0.8em;

  z-index: ${zIndex.low};
`

export const TitleWord = styled.div`
  display: inline-block;
  white-space: pre;
`

export const TitleCharacter = styled.div``
