import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Store } from "../../store/types"

import Loader from "./loader"
import { loaderVisibleAction } from "../../store/actions"

interface DispatchProps {
  showSite: () => void
}

type AllProps = Partial<Store> & DispatchProps

const mapStateToProps = ({ loaderVisible }: Store) => {
  return { loaderVisible }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    showSite: () => {
      dispatch(loaderVisibleAction(true))
    },
  }
}

const LoaderContainer: React.FunctionComponent<AllProps> = ({
  showSite,
  loaderVisible,
}) => {
  // Test store update
  setTimeout(() => {
    showSite()
  }, 2000)

  return <Loader visible={loaderVisible} />
}

const ConnectedLoaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoaderContainer)

export default ConnectedLoaderContainer
