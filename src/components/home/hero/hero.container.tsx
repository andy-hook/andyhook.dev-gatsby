import React, { memo } from "react"
import Hero from "./hero"
import { IMetaData } from "@custom-types/model"
import { IStore } from "@custom-types/store"
import { connect } from "react-redux"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import { Dispatch } from "redux"
import { setTopbarThemeAction, setMenuThemeAction } from "@store/actions"
import { useStaticQuery, graphql } from "gatsby"

interface Data {
  socialIconData: IMetaData
}

interface DispatchProps {
  setTopbarToPrimaryTheme: () => void
  setMenuToSecondaryTheme: () => void
}

export type ContainerProps = Partial<IStore>

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
    loaderVisible,
    firstEntrance,
    setTopbarToPrimaryTheme,
    setMenuToSecondaryTheme,
  }) => {
    const transitionState = useTransitionState()

    const data: Data = useStaticQuery(graphql`
      query {
        socialIconData: site {
          siteMetadata {
            social {
              email {
                url
                label
                icon
              }
              twitter {
                url
                label
                icon
              }
              instagram {
                url
                label
                icon
              }
              dribbble {
                url
                label
                icon
              }
              github {
                url
                label
                icon
              }
              linkedin {
                url
                label
                icon
              }
            }
          }
        }
      }
    `)

    const switchThemeForElements = () => {
      setTopbarToPrimaryTheme()
      setMenuToSecondaryTheme()
    }

    return (
      <Hero
        socialIconData={data.socialIconData.siteMetadata.social}
        introTrigger={!loaderVisible}
        canPerformIntro={firstEntrance}
        transitionState={transitionState}
        switchThemeForElements={switchThemeForElements}
      />
    )
  }
)

const ConnectedHero = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroContainer)

export default ConnectedHero
