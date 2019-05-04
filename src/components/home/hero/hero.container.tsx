import React, { memo } from "react"
import Hero from "./hero"
import { ISocialMeta } from "@custom-types/model"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"

interface Props {
  socialIconData: ISocialMeta
}

export type ContainerProps = Props & Partial<IStore>

const mapStateToProps = ({ loaderVisible, firstEntrance }: IStore) => {
  return { loaderVisible, firstEntrance }
}

const HeroContainer: React.FunctionComponent<ContainerProps> = memo(
  ({ socialIconData, loaderVisible, firstEntrance }) => {
    return (
      <Hero
        socialIconData={socialIconData}
        introTrigger={!loaderVisible}
        canPerformIntro={firstEntrance}
        transitionState={useTransitionState()}
      />
    )
  }
)

const ConnectedHero = connect(mapStateToProps)(HeroContainer)

export default ConnectedHero
