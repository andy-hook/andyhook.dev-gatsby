import React from "react"
import Splash from "./splash"
import { IMeta } from "../../types/model"
import { IStore } from "../../types/store"
import { connect } from "react-redux"

interface Props {
  metaData: IMeta
}

export type ContainerProps = Props & Partial<IStore>

const mapStateToProps = ({ loaderVisible }: IStore) => {
  return { loaderVisible }
}

const SplashContainer: React.FunctionComponent<ContainerProps> = ({
  metaData,
  loaderVisible,
}) => {
  return <Splash metaData={metaData} visible={!loaderVisible} />
}

const ConnectedSplashContainer = connect(mapStateToProps)(SplashContainer)

export default ConnectedSplashContainer
