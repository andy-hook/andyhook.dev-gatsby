import React, { useState } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Store } from "../../types/store"

import Loader from "./loader"
import { loaderVisibleAction } from "../../store/actions"

interface DispatchProps {
  hideLoader: () => void
}

type AllProps = Partial<Store> & DispatchProps

const mapStateToProps = ({ loaderVisible }: Store) => {
  return { loaderVisible }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    hideLoader: () => {
      dispatch(loaderVisibleAction(false))
    },
  }
}

const LoaderContainer: React.FunctionComponent<AllProps> = ({
  hideLoader,
  loaderVisible,
}) => {
  const [shouldRenderLoader, setRender] = useState(true)

  const setRenderFalse = () => setRender(false)

  const hideLoaderDelay = () => {
    setTimeout(() => {
      hideLoader()
    }, 500)
  }

  const renderLoader = () => {
    if (shouldRenderLoader) {
      return (
        <Loader
          visible={loaderVisible}
          onEnterComplete={hideLoaderDelay}
          onLeaveComplete={setRenderFalse}
        />
      )
    }
  }

  return <>{renderLoader()}</>
}

const ConnectedLoaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoaderContainer)

export default ConnectedLoaderContainer
