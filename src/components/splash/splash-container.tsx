import React from "react"
import Splash from "./splash"
import { ISocialMeta } from "../../types/model"
import { IStore } from "../../types/store"
import { connect } from "react-redux"

interface Props {
  socialIconData: ISocialMeta
  buttonHref: string
}

export type ContainerProps = Props & Partial<IStore>

const mapStateToProps = ({ loaderVisible }: IStore) => {
  return { loaderVisible }
}

const SplashContainer: React.FunctionComponent<ContainerProps> = ({
  socialIconData,
  buttonHref,
  loaderVisible,
}) => {
  return (
    <Splash
      socialIconData={socialIconData}
      buttonHref={buttonHref}
      visible={!loaderVisible}
    />
  )
}

const ConnectedSplashContainer = connect(mapStateToProps)(SplashContainer)

export default ConnectedSplashContainer
