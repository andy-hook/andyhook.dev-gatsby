import React, { memo, ReactNode } from "react"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import Home from "./home"
import { themes } from "@style/theme"
import { ThemeProvider } from "styled-components"

interface IProps {
  children: ReactNode
}

const mapStateToProps = ({ menuOpen }: IStore) => {
  return { menuOpen }
}

const HomeContainer: React.FunctionComponent<IProps> = memo(({ children }) => {
  return (
    <ThemeProvider theme={themes.dark}>
      <Home>{children}</Home>
    </ThemeProvider>
  )
})

const ConnectedHomeContainer = connect(mapStateToProps)(HomeContainer)

export default ConnectedHomeContainer
