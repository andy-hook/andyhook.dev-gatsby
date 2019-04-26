import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Store } from "../../store/types"

import Loader from "./loader"
import { siteVisibleAction } from "../../store/actions"

interface DispatchProps {
  showSite: () => void
}

type AllProps = Partial<Store> & DispatchProps

const mapStateToProps = ({ siteVisible }: Store) => {
  return { siteVisible }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    showSite: () => {
      dispatch(siteVisibleAction(true))
    },
  }
}

const LoaderContainer: React.FunctionComponent<AllProps> = ({
  showSite,
  siteVisible,
}) => {
  // Test store update
  setTimeout(() => {
    showSite()
  }, 2000)

  return <Loader visible={siteVisible} />
}

const ConnectedLoaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoaderContainer)

export default ConnectedLoaderContainer
