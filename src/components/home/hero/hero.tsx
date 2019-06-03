import React, { useEffect, memo } from "react"
import styled from "styled-components"
import { rem } from "polished"
import Social from "./social/social"
import { ContainerProps } from "./hero.container"
import Details from "./details/details"
import { mq, scaleBetween, scaleGreaterThan } from "@style/media-queries"
import { typeScale, zIndex } from "@style/variables"
import { animation } from "./hero.animation"
import { Ref } from "@custom-types/ref"
import heroBg from "@images/hero-bg.svg"
import date from "./date/date"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"
import Gutter from "@components/shared/gutter/gutter"
import { isTheme, themeLayer, themeLayerAlpha, themeTone } from "@style/theme"
import ThemeSwitch from "@components/shared/theme-switch/theme-switch.container"
import { keys } from "@custom-types/utils"

interface Props {
  introTrigger?: boolean
  canPerformIntro?: boolean
  transitionState: ItransitionState
  switchThemeForElements: () => void
}

type AllProps = Props & ContainerProps

const Hero: React.FunctionComponent<AllProps> = memo(
  ({
    socialIconData,
    introTrigger = true,
    canPerformIntro = true,
    transitionState,
    switchThemeForElements,
  }) => {
    const detailsRef = React.useRef() as Ref
    const socialRef = React.useRef() as Ref
    const backgroundRef = React.useRef() as Ref
    const dateRef = React.useRef() as Ref

    const refs = {
      details: detailsRef,
      social: socialRef,
      date: dateRef,
      background: backgroundRef,
    }

    const runAnimation = (type: string) => {
      keys(refs).map(item => {
        animation[item][type](refs[item])
      })
    }

    // Switch themes in menu and topbar
    useEffect(() => {
      switchThemeForElements()
    }, [])

    useEffect(() => {
      const { transitionStatus, exit, entry } = transitionState

      switch (transitionStatus) {
        case "POP":
          runAnimation("pop")
          break
        case "entering":
          switch (entry.state.animType) {
            case "enter-from-project":
              {
                runAnimation("enterFromProject")
              }
              break

            // This clause works around bug with pushstate and history navigation
            // Hopefully this can be resolved and pop will run consistently
            // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
            default:
              runAnimation("pop")
          }
          break
        case "exiting":
          switch (exit.state.animType) {
            case "exit-to-project":
              {
                runAnimation("exitToProject")
              }
              break
          }
          break
      }
    }, [transitionState.transitionStatus])

    // Perform this immediatley without waiting for a trigger
    useEffect(() => {
      if (canPerformIntro) {
        animation.background.siteEntrance(backgroundRef)
      }
    }, [canPerformIntro])

    // Only trigger site entrance animation when requested by loader
    useEffect(() => {
      if (introTrigger && canPerformIntro) {
        runAnimation("siteEntrance")
      }
    }, [introTrigger])

    return (
      <>
        <Container>
          <DetailsPos ref={detailsRef}>
            <Gutter>
              <Details buttonHref={socialIconData.dribbble.url} />
            </Gutter>
          </DetailsPos>

          <SocialPos ref={socialRef}>
            <Social items={socialIconData} />
          </SocialPos>

          <BackgroundContainer ref={backgroundRef}>
            <BackgroundGradient />
            <Date ref={dateRef}>
              <DateGraphic />
            </Date>
            <BackgroundTexture />
          </BackgroundContainer>

          <ThemeSwitch />
        </Container>
      </>
    )
  }
)

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const DetailsPos = styled.div`
  position: relative;

  width: 100%;

  margin-bottom: -3vh;

  z-index: ${zIndex.low};

  opacity: 0;

  will-change: transform;
`

const SocialPos = styled.div`
  position: absolute;
  width: 100%;
  left: 0;

  bottom: 9vh;

  z-index: ${zIndex.low};

  font-size: ${typeScale[6]};

  opacity: 0;

  ${scaleBetween(
    "font-size",
    typeScale[6],
    typeScale[8],
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[8], "topUltra")}
`

const BackgroundContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${isTheme("dark", themeTone(200), themeTone(700))};

  overflow: hidden;

  z-index: ${zIndex.floor};

  opacity: 0;
`

const BackgroundTexture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: url(${heroBg}) repeat top left;

  ${isTheme("light", `opacity: 0.06;`)}

  z-index: ${zIndex.floor};

  ${mq.greaterThan("topWall")`
    background-size: 35%;
  `}
`

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: ${zIndex.medium};

  background: linear-gradient(
    175deg,
    ${themeLayerAlpha("lowest", 0)} 25%,
    ${themeLayer("lowest")} 65%
  );
`

const Date = styled.div`
  position: relative;
  width: 1em;
  height: 0.35em;

  font-size: ${rem("1400px")};

  z-index: ${zIndex.low};

  opacity: 0;

  ${mq.lessThan("topDesk")`
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate3d(-45vw, -50%, 0);
  `}

  ${scaleBetween(
    "font-size",
    rem("1400px"),
    rem("1050px"),
    "topThumb",
    "bottomDesk"
  )}

  ${scaleBetween(
    "font-size",
    rem("1050px"),
    rem("1250px"),
    "topDesk",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", rem("1250px"), "topUltra")}
`

const DateGraphic = styled(date)`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`

export default Hero
