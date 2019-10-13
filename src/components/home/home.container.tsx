import React, { memo, ReactNode } from "react"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import Home from "./home"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import { themes } from "@style/theme"
import { ThemeProvider } from "styled-components"

interface IProps {
  children: ReactNode
}

interface IStoreProps {
  menuOpen: IStore["menuOpen"]
}

const mapStateToProps = ({ menuOpen }: IStore) => {
  return { menuOpen }
}

type AllProps = IProps & IStoreProps

const HomeContainer: React.FunctionComponent<AllProps> = memo(
  ({ children, menuOpen }) => {
    const transitionState = useTransitionState()

    return (
      <ThemeProvider theme={themes.dark}>
        <Home menuOpen={menuOpen} transitionState={transitionState}>
          {children}
        </Home>
      </ThemeProvider>
    )
  }
)

const ConnectedHomeContainer = connect(mapStateToProps)(HomeContainer)

export default ConnectedHomeContainer
