import React, { memo, ReactNode } from "react"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import Home from "./home"
import Theme from "@components/shared/theme/theme"
import { TThemeType } from "@custom-types/theme"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"

interface Props {
  children: ReactNode
}

const mapStateToProps = ({ homeTheme }: IStore) => {
  return { homeTheme }
}

type AllProps = Props & Partial<IStore>

const HomeContainer: React.FunctionComponent<AllProps> = memo(
  ({ children, homeTheme }) => {
    const theme = homeTheme as TThemeType
    const transitionState = useTransitionState()

    return (
      <Theme themeType={theme}>
        <Home transitionState={transitionState}>{children}</Home>
      </Theme>
    )
  }
)

const ConnectedHomeContainer = connect(mapStateToProps)(HomeContainer)

export default ConnectedHomeContainer
