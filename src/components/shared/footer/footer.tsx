import React, { memo } from "react"
import styled from "styled-components"
import { borderThickness } from "@style/variables"
import { themeTone } from "@style/theme"
import { typeTitle } from "@style/typography"
import Gutter from "../gutter/gutter"
import Limiter from "../limiter/limiter"

const Footer: React.FunctionComponent = memo(() => (
  <Container>
    <Gutter>
      <Limiter>I am a footer</Limiter>
    </Gutter>
  </Container>
))

const Container = styled.footer`
  ${typeTitle}
  height: 100px;
  border-top: ${borderThickness.regular} solid ${themeTone(300)};
`

export default Footer
