import styled from "styled-components"
import { typeTitle, typeBody, typeSizeBaseMd } from "@style/typography"

export const Container = styled.div`
  display: flex;
`

export const Title = styled.h2`
  ${typeTitle}

  font-size: 50px;

  min-width: 10em;
`

export const Body = styled.p`
  ${typeBody}
  ${typeSizeBaseMd}
`
