import React, { memo, ReactNode } from "react"
import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from "@style/theme"

interface Props {
  children: ReactNode
}

const SiteContainer: React.FunctionComponent<Props> = memo(({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>{children}</Container>
    </ThemeProvider>
  )
})

const Container = styled.div`
  background-color: ${props => props.theme.tone[100]};
`

export default SiteContainer
