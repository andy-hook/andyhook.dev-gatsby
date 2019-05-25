import React, { memo, ReactNode } from "react"
import styled, { ThemeProvider } from "styled-components"
import { themes, themeLayer } from "@style/theme"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"

interface Props {
  children: ReactNode
}

const mapStateToProps = ({ primaryTheme }: IStore) => {
  return { primaryTheme }
}

type AllProps = Props & Partial<IStore>

const SiteContainer: React.FunctionComponent<AllProps> = memo(
  ({ children, primaryTheme = "dark" }) => {
    return (
      <ThemeProvider theme={themes[primaryTheme]}>
        <Container>{children}</Container>
      </ThemeProvider>
    )
  }
)

const Container = styled.div`
  background-color: ${themeLayer("lowest")};
`

const ConnectedSiteContainer = connect(mapStateToProps)(SiteContainer)

export default ConnectedSiteContainer
