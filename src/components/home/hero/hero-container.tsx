import React from "react"
import Hero from "./hero"
import { ISocialMeta } from "../../../types/model"
import { IStore } from "../../../types/store"
import { connect } from "react-redux"

interface Props {
  socialIconData: ISocialMeta
}

export type ContainerProps = Props & Partial<IStore>

const mapStateToProps = ({ loaderVisible, firstEntrance }: IStore) => {
  return { loaderVisible, firstEntrance }
}

const SplashContainer: React.FunctionComponent<ContainerProps> = ({
  socialIconData,
  loaderVisible,
  firstEntrance,
}) => {
  return (
    <Hero
      socialIconData={socialIconData}
      introTrigger={!loaderVisible}
      canPerformIntro={firstEntrance}
    />
  )
}

const ConnectedSplashContainer = connect(mapStateToProps)(SplashContainer)

export default ConnectedSplashContainer
