import React, { useEffect } from "react"
import styled from "styled-components"
import { between, rem, rgba } from "polished"
import Social from "./social/social"
import Logo from "@components/shared/logo/logo"
import { ContainerProps } from "./hero.container"
import Details from "./details/details"
import { uniformScale, mq } from "@style/utils"
import { emBreakpoints, typeScale } from "@style/variables"
import animation from "./hero.animation"
import { Ref } from "@custom-types/ref"
import heroBg from "@images/hero-bg.svg"
import date from "@images/svg-import/date.svg"
import { ItransitionProps } from "@custom-types/gatsby-plugin-transition-link"
import Link from "gatsby-plugin-transition-link"

interface Props {
  introTrigger?: boolean
  canPerformIntro?: boolean
}

type AllProps = Props & ContainerProps

const Hero: React.FunctionComponent<AllProps> = ({
  socialIconData,
  introTrigger = true,
  canPerformIntro = true,
  transitionProps,
}) => {
  const detailsRef: Ref = React.useRef() as Ref
  const logoRef: Ref = React.useRef() as Ref
  const socialRef: Ref = React.useRef() as Ref
  const backgroundRef: Ref = React.useRef() as Ref
  const dateRef: Ref = React.useRef() as Ref

  const animateBackground = () =>
    animation.background.siteEntrance(backgroundRef)

  const animateIntroElements = () => {
    animation.details.siteEntrance(detailsRef)
    animation.logo.siteEntrance(logoRef)
    animation.social.siteEntrance(socialRef)
    animation.date.siteEntrance(dateRef)
  }

  const animateExitElements = () => {
    alert("hero exiting")
  }

  const animateEnteringElements = () => {
    alert("hero entering")
  }

  useEffect(() => {
    const { transitionStatus } = transitionProps

    if (transitionStatus === "exiting") {
      animateExitElements()
    }

    if (transitionStatus === "entering") {
      animateEnteringElements()
    }
  }, [transitionProps])

  useEffect(() => {
    if (canPerformIntro) {
      animateBackground()
    }
  }, [])

  useEffect(() => {
    if (introTrigger && canPerformIntro) {
      setTimeout(() => {
        animateIntroElements()
      }, 650)
    }
  }, [introTrigger])

  return (
    <>
      <Link
        to="/brandwatch"
        // Entry animation to play on the brandwatch page
        entry={{
          delay: 0,
          length: 0,
          state: "from-right",
        }}
        // The exit animation to play on this hero element
        exit={{
          delay: 0,
          length: 0,
          state: 34234234,
        }}
      >
        GO BRANDWATCH
      </Link>
      <Container>
        <LogoPos ref={logoRef}>
          <Logo />
        </LogoPos>

        <DetailsPos ref={detailsRef}>
          <Details buttonHref={socialIconData.dribbble.url} />
        </DetailsPos>

        <SocialPos ref={socialRef}>
          <Social items={socialIconData} />
        </SocialPos>

        <BackgroundContainer ref={backgroundRef}>
          <BackgroundGradient />
          <Date ref={dateRef}>
            <DateGraphic />
          </Date>
        </BackgroundContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const LogoPos = styled.div`
  display: flex;

  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;

  top: 9vh;

  z-index: 1;

  opacity: 0;
`

const DetailsPos = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  flex-direction: column;

  margin-bottom: -3vh;

  z-index: 1;

  opacity: 0;

  will-change: transform;
`

const SocialPos = styled.div`
  position: absolute;
  width: 100%;
  left: 0;

  bottom: 9vh;

  z-index: 1;

  font-size: ${typeScale[6]};

  opacity: 0;

  ${mq.between("bottomThumb", "bottomUltra")`
    font-size: ${between(
      typeScale[6],
      typeScale[8],
      emBreakpoints.bottomThumb,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(typeScale[8], "topUltra")};
  `}
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

  background: url(${heroBg}) repeat top left;

  overflow: hidden;

  z-index: 0;

  opacity: 0;

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

  z-index: 2;

  background: linear-gradient(175deg, ${rgba("#050506", 0)} 30%, #050506 80%);
`

const Date = styled.div`
position: relative;
  width: 1em;
  height: 0.35em;

  font-size: ${rem("1400px")};

  z-index: 1;

  opacity: 0;

  ${mq.lessThan("topDesk")`
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate3d(-45vw, -50%, 0);
  `}

  ${mq.between("topThumb", "bottomDesk")`
    font-size: ${between(
      rem("1400px"),
      rem("1050px"),
      emBreakpoints.topThumb,
      emBreakpoints.bottomDesk
    )};
  `}

  ${mq.between("topDesk", "bottomUltra")`
    font-size: ${between(
      rem("1050px"),
      rem("1250px"),
      emBreakpoints.topDesk,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(rem("1250px"), "topUltra")};
  `}
`

const DateGraphic = styled(date)`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`

export default Hero
