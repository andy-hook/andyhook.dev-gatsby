import React, { memo, useEffect } from "react"
import NextProject from "./next-project"
import { connect } from "react-redux"
import { ProjectItem } from "model"
import { Dispatch } from "redux"
import { Store } from "store"
import { topbarVisibleAction, lockTopbarAction } from "@store/actions"

interface Props {
  nextProjectItem: ProjectItem
}

interface StoreProps {
  lockTopbar: Store["lockTopbar"]
}

interface DispatchProps {
  hideAndLockTopbar: () => void
  showAndUnlockTopbar: () => void
}

type AllProps = Props & DispatchProps & StoreProps

const mapStateToProps = ({ lockTopbar }: Store) => {
  return { lockTopbar }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    hideAndLockTopbar: () => {
      dispatch(topbarVisibleAction(false))
      dispatch(lockTopbarAction(true))
    },
    showAndUnlockTopbar: () => {
      dispatch(topbarVisibleAction(true))
      dispatch(lockTopbarAction(false))
    },
  }
}

const NextProjectContainer: React.FunctionComponent<AllProps> = memo(
  ({ nextProjectItem, hideAndLockTopbar, lockTopbar, showAndUnlockTopbar }) => {
    // Show topbar if it was hidden previously
    useEffect(() => {
      if (lockTopbar) {
        showAndUnlockTopbar()
      }
    }, [])
    return (
      <NextProject
        nextProjectItem={nextProjectItem}
        onProjectChange={hideAndLockTopbar}
      />
    )
  }
)

const ConnectedNextProject = connect(
  mapStateToProps,
  mapDispatchToProps
)(NextProjectContainer)

export default ConnectedNextProject
