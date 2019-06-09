import React, { memo, ReactNode } from "react"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import Home from "./home"
import Theme from "@components/shared/theme/theme"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"

interface IProps {
  children: ReactNode
}

interface IStoreProps {
  menuOpen: IStore["menuOpen"]
  homeTheme: IStore["homeTheme"]
}

const mapStateToProps = ({ homeTheme, menuOpen }: IStore) => {
  return { homeTheme, menuOpen }
}

type AllProps = IProps & IStoreProps

const HomeContainer: React.FunctionComponent<AllProps> = memo(
  ({ children, homeTheme, menuOpen }) => {
    const transitionState = useTransitionState()

    return (
      <Theme themeType={homeTheme}>
        <Home menuOpen={menuOpen} transitionState={transitionState}>
          {children}
        </Home>
      </Theme>
    )
  }
)

const ConnectedHomeContainer = connect(mapStateToProps)(HomeContainer)

export default ConnectedHomeContainer
