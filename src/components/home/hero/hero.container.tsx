import React from "react"
import Hero from "./hero"
import { ISocialMeta } from "@custom-types/model"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import { TransitionState } from "gatsby-plugin-transition-link"
import { ItransitionProps } from "@custom-types/gatsby-plugin-transition-link"

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
    <TransitionState>
      {(transitionProps: ItransitionProps) => {
        return (
          <Hero
            socialIconData={socialIconData}
            introTrigger={!loaderVisible}
            canPerformIntro={firstEntrance}
            transitionProps={transitionProps}
          />
        )
      }}
    </TransitionState>
  )
}

const ConnectedHero = connect(mapStateToProps)(HeroContainer)

export default ConnectedHero
