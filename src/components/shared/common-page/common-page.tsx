import React, { memo, ReactNode } from "react"
import styled from "styled-components"
import Limiter from "@components/shared/limiter/limiter"
import Footer from "@components/shared/footer/footer"
import Gutter from "@components/shared/gutter/gutter"

interface Props {
  children: ReactNode
}

const CommonPage: React.FunctionComponent<Props> = memo(({ children }) => (
  <Container>
    <Gutter>
      <Limiter>{children}</Limiter>
    </Gutter>
    <Footer />
  </Container>
))

const Container = styled.div`
  padding-top: 200px;
  height: 2000px;
`

export default CommonPage
