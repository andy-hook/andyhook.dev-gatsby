import React, { memo, ReactNode, useEffect } from "react"
import { menuOpenAction } from "@store/actions"
import { Dispatch } from "redux"
import { IStore } from "store"
import { connect } from "react-redux"

interface Props {
  children: ReactNode
}

interface DispatchProps {
  closeMenu: () => void
}

interface IStoreProps {
  menuOpen: IStore["menuOpen"]
}

type AllProps = Props & IStoreProps & DispatchProps

const mapStateToProps = ({ menuOpen }: IStore) => {
  return { menuOpen }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    closeMenu: () => {
      dispatch(menuOpenAction(false))
    },
  }
}

const PageContainer: React.FunctionComponent<AllProps> = memo(
  ({ children, menuOpen, closeMenu }) => {
    useEffect(() => {
      if (menuOpen) {
        // Dispatch close menu action here to ensure the page is mounted before attempting to hide the menu
        // This is a much smoother interaction than dispatching from inside the menu item click handler
        closeMenu()
      }
    }, [])

    return <>{children}</>
  }
)

const ConnectedPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)

export default ConnectedPageContainer
