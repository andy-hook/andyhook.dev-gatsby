import React, { memo } from "react"
import Hero from "./hero"
import { ISocialMeta } from "@custom-types/model"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import { Dispatch } from "redux"
import { setTopbarThemeAction, setMenuThemeAction } from "@store/actions"

interface Props {
  socialIconData: ISocialMeta
}

interface DispatchProps {
  setTopbarToPrimaryTheme: () => void
  setMenuToSecondaryTheme: () => void
}

export type ContainerProps = Props & Partial<IStore>

type AllProps = ContainerProps & DispatchProps

const mapStateToProps = ({ loaderVisible, firstEntrance }: IStore) => {
  return { loaderVisible, firstEntrance }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setTopbarToPrimaryTheme: () => {
      dispatch(setTopbarThemeAction("primary-theme"))
    },
    setMenuToSecondaryTheme: () => {
      dispatch(setMenuThemeAction("secondary-theme"))
    },
  }
}

const HeroContainer: React.FunctionComponent<AllProps> = memo(
  ({
    socialIconData,
    loaderVisible,
    firstEntrance,
    setTopbarToPrimaryTheme,
    setMenuToSecondaryTheme,
  }) => {
    const switchThemeForElements = () => {
      setTopbarToPrimaryTheme()
      setMenuToSecondaryTheme()
    }

    return (
      <Hero
        socialIconData={socialIconData}
        introTrigger={!loaderVisible}
        canPerformIntro={firstEntrance}
        transitionState={useTransitionState()}
        onAnimationComplete={switchThemeForElements}
      />
    )
  }
)

const ConnectedHero = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroContainer)

export default ConnectedHero
