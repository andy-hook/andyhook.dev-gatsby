import React from "react"
import Hero from "./hero"
import { ISocialMeta } from "@custom-types/model"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"

interface Props {
  socialIconData: ISocialMeta
}

export type ContainerProps = Props & Partial<IStore>

const mapStateToProps = ({ loaderVisible, firstEntrance }: IStore) => {
  return { loaderVisible, firstEntrance }
}

const HeroContainer: React.FunctionComponent<ContainerProps> = ({
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

const ConnectedHero = connect(mapStateToProps)(HeroContainer)

export default ConnectedHero
