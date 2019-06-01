import React, { memo, ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import Home from "./home"

interface Props {
  children: ReactNode
}

const mapStateToProps = ({ primaryTheme }: IStore) => {
  return { primaryTheme }
}

type AllProps = Props & Partial<IStore>

const HomeContainer: React.FunctionComponent<AllProps> = memo(
  ({ children, primaryTheme = "dark" }) => {
    return (
      <ThemeProvider theme={themes[primaryTheme]}>
        <Home>{children}</Home>
      </ThemeProvider>
    )
  }
)

// const Container = styled.div`
//   background-color: ${themeLayer("lowest")};
// `

const ConnectedHomeContainer = connect(mapStateToProps)(HomeContainer)

export default ConnectedHomeContainer
