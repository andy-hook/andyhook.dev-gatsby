import React from "react"
import Splash from "./splash"
import { SocialItem } from "../../types/model"
import { Store } from "../../types/store"
import { connect } from "react-redux"

interface Props {
  socialIconData: SocialItem[]
  buttonHref: string
}

export type ContainerProps = Props & Partial<Store>

const mapStateToProps = ({ loaderVisible }: Store) => {
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
