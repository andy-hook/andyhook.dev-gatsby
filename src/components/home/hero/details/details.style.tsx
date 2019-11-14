import styled from "styled-components"
import { typeTitle, typeSizeDisplayXl } from "@style/typography"
import { themeTone, isDarkTheme } from "@style/theme"
import { zIndex } from "@style/variables"

export const DetailsContainer = styled.div`
  display: flex;

  align-items: center;

  flex-direction: column;
`

export const Title = styled.h2`
  ${typeSizeDisplayXl}
  ${typeTitle}

  ${isDarkTheme(`text-shadow: 0 0 2em ${themeTone(100)};`)}

  text-align: center;
  max-width: 12em;
  margin-top: 0;
  margin-bottom: 0.8em;

  z-index: ${zIndex.low};
`
