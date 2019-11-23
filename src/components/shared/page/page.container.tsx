import React, { memo, useEffect } from "react"
import { menuOpenAction } from "@store/actions"
import { Dispatch } from "redux"
import { Store } from "store"
import { connect } from "react-redux"

interface DispatchProps {
  closeMenu: () => void
}

interface StoreProps {
  menuOpen: Store["menuOpen"]
}

type AllProps = StoreProps & DispatchProps

const mapStateToProps = ({ menuOpen }: Store) => {
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
  ({ children, menuOpen }) => {
    useEffect(() => {
      if (menuOpen) {
        // Dispatch close menu action here to ensure the page is mounted before attempting to hide the menu
        // This is a much smoother interaction than dispatching from inside the menu item click handler
        // closeMenu()
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
