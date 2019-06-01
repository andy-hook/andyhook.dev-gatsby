import React, { memo, ReactNode } from "react"
import ContentScrollContainer from "@components/shared/content-scroll/content-scroll.container"
import styled from "styled-components"
import { themeLayer } from "@style/theme"

interface Props {
  children: ReactNode
}

const Home: React.FunctionComponent<Props> = memo(({ children }) => {
  return (
    <ContentScrollContainer>
      <Container>{children}</Container>
    </ContentScrollContainer>
  )
})

const Container = styled.article`
  background-color: ${themeLayer("lowest")};
`

export default Home
