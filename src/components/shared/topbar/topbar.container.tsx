import React, { memo } from "react"
import Topbar from "./topbar"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { IStore } from "@custom-types/store"
import { menuOpenAction } from "@store/actions"
import { TThemeType } from "theme"

interface DispatchProps {
  openMenu: () => void
  closeMenu: () => void
}

type ContainerProps = Partial<IStore> & DispatchProps

const mapStateToProps = ({ menuOpen, topbarTheme }: IStore) => {
  return { menuOpen, topbarTheme }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    openMenu: () => {
      dispatch(menuOpenAction(true))
    },
    closeMenu: () => {
      dispatch(menuOpenAction(false))
    },
  }
}

const TopbarContainer: React.FunctionComponent<ContainerProps> = memo(
  ({ menuOpen, openMenu, closeMenu, topbarTheme }) => {
    const theme = topbarTheme as TThemeType

    return (
      <Topbar
        open={menuOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
        theme={theme}
      />
    )
  }
)

const ConnectedTopbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopbarContainer)

export default ConnectedTopbar
