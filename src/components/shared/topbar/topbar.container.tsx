import React, { memo } from "react"
import Topbar from "./topbar"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { IStore } from "@custom-types/store"
import { menuOpenAction } from "@store/actions"

interface DispatchProps {
  openMenu: () => void
  closeMenu: () => void
}

type ContainerProps = Partial<IStore> & DispatchProps

const mapStateToProps = ({ menuOpen }: IStore) => {
  return { menuOpen }
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
  ({ menuOpen, openMenu, closeMenu }) => {
    return (
      <Topbar open={menuOpen} onMenuOpen={openMenu} onMenuClose={closeMenu} />
    )
  }
)

const ConnectedTopbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopbarContainer)

export default ConnectedTopbar
