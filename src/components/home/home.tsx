import React, { memo, ReactNode } from "react"
import styled from "styled-components"
import { themeLayer } from "@style/theme"

interface Props {
  children: ReactNode
}

const Home: React.FunctionComponent<Props> = memo(({ children }) => {
  return <Container>{children}</Container>
})

const Container = styled.article`
  background-color: ${themeLayer("lowest")};
`

export default Home
