import React, { useState } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Store } from "../../types/store"

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
      dispatch(loaderVisibleAction(false))
    },
  }
}

const LoaderContainer: React.FunctionComponent<AllProps> = ({
  showSite,
  loaderVisible,
}) => {
  const [shouldRenderLoader, setRender] = useState(true)

  const setRenderFalse = () => setRender(false)

  const renderLoader = () => {
    if (shouldRenderLoader) {
      return <Loader visible={loaderVisible} onComplete={setRenderFalse} />
    }
  }

  // Test store update
  setTimeout(() => {
    showSite()
  }, 2000)

  return <>{renderLoader()}</>
}

const ConnectedLoaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoaderContainer)

export default ConnectedLoaderContainer
