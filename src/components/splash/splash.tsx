import React from "react"
import styled from "styled-components"
import { rem, between, rgba } from "polished"

import { SocialItem } from "../../types/model"

import Social from "../social/social"
import date from "../../images/svg-import/date.svg"
import mark from "../../images/svg-import/mark.svg"
import heroBg from "../../images/hero-bg.svg"
import { uniformScale, mq } from "../../style/utils"
import {
  emBreakpoints,
  typeScale,
  fontFamily,
  fontWeight,
  borderRadius,
  letterSpacing,
  duration,
} from "../../style/variables"

interface Props {
  socialIconData: SocialItem[]
  buttonHref: string
}

const Splash: React.FunctionComponent<Props> = ({
  socialIconData,
  buttonHref,
}) => {
  return (
    <Container>
      <LogoPos>
        <Logo>
          <LogoMark />
          <LogoTitle>Andy Hook</LogoTitle>
          <LogoSubtle>Interface Developer</LogoSubtle>
        </Logo>
      </LogoPos>
      <ContainerInner>
        <Title>I’m busy working on something new</Title>
        <CallToAction href={buttonHref} target="_blank">
          <CallToActionInner>View some of my work</CallToActionInner>
        </CallToAction>
      </ContainerInner>

      <SocialIcons items={socialIconData} />
      <Background>
        <BackgroundGradient />
        <DateGraphic />
      </Background>
    </Container>
  )
}

const LogoPos = styled.div`
  display: flex;

  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;

  top: 9vh;

  z-index: 1;
`

const Logo = styled.h1`
  display: flex;
  align-items: center;
  font-family: ${fontFamily.base};
  color: white;
  font-size: ${typeScale[1]};
  font-weight: ${fontWeight.base.medium};

  letter-spacing: ${letterSpacing.base};

  ${mq.greaterThan("bottomThumb")`
    margin-left: -1.5em;
  `}

  ${mq.between("bottomThumb", "bottomUltra")`
    font-size: ${between(
      typeScale[1],
      typeScale[2],
      emBreakpoints.bottomThumb,
      emBreakpoints.bottomDesk
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(typeScale[2], "topUltra")};
  `}
`

const LogoMark = styled(mark)`
  font-size: 4.5em;
  width: 1em;
  height: 1em;
`

const LogoTitle = styled.span`
  margin-left: 1.5em;
  margin-right: 0.5em;

  ${mq.lessThan("bottomThumb")`
    display: none;
  `}
`

const LogoSubtle = styled.span`
  opacity: 0.4;

  ${mq.lessThan("bottomThumb")`
    display: none;
  `}
`

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  flex-direction: column;

  margin-bottom: -3vh;

  z-index: 1;
`

const Title = styled.h2`
  font-family: ${fontFamily.display};
  font-weight: 600;
  text-align: center;
  color: #e3e3eb;
  padding-left: 0.75em;
  padding-right: 0.75em;
  letter-spacing: ${letterSpacing.display};
  max-width: 13em;
  text-shadow: 0px 0px 2em #08080a;

  margin-top: 0;
  margin-bottom: 0.7em;

  z-index: 1;

  font-size: ${typeScale[9]};

  ${mq.between("bottomThumb", "bottomDesk")`
    font-size: ${between(
      typeScale[9],
      typeScale[11],
      emBreakpoints.bottomThumb,
      emBreakpoints.bottomDesk
    )};
  `}

  ${mq.between("topDesk", "bottomUltra")`
    font-size: ${between(
      typeScale[11],
      typeScale[12],
      emBreakpoints.bottomDesk,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(typeScale[12], "topUltra")};
  `}
`

const CallToAction = styled.a`
  position: relative;

  overflow: hidden;
  font-family: ${fontFamily.base};

  color: #fff;

  font-weight: ${fontWeight.base.bold};

  font-size: ${typeScale[2]};

  border-radius: ${borderRadius.pill};

  text-decoration: none;
  text-shadow: 0 0 0.03em rgba(0, 0, 0, 0.5);

  padding: 1em 1.95em;
  background: linear-gradient(160deg, #d450ff 0%, #6609e1 100%);

  &::before,
  &::after {
    transition: opacity ${duration.fast} linear;
    content: "";

    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    opacity: 0;

    border-radius: ${borderRadius.pill};
  }

  &::before {
    box-shadow: inset 0 -0.25em 1em 0 #c615a8;
    z-index: 2;
  }

  &::after {
    background: linear-gradient(160deg, #c615a8 0%, #4d0fbe 100%);
    z-index: 1;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 0.1;
    }

    &::after {
      /* mix-blend-mode: multiply; */
      opacity: 0.75;
    }
  }

  ${mq.between("bottomThumb", "bottomUltra")`
    font-size: ${between(
      typeScale[2],
      typeScale[4],
      emBreakpoints.bottomThumb,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(typeScale[4], "topUltra")};
  `}
`

const CallToActionInner = styled.span`
  position: relative;
  z-index: 2;
`

const SocialIcons = styled(Social)`
  position: absolute;
  width: 100%;
  left: 0;

  bottom: 9vh;

  z-index: 1;

  font-size: ${typeScale[6]};

  ${mq.between("bottomThumb", "topUltra")`
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

const Background = styled.div`
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
`

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 2;

  background: linear-gradient(175deg, ${rgba("#050506", 0)} 30%, #020203 80%);
`

const DateGraphic = styled(date)`
  width: 1em;
  height: 0.35em;

  font-size: ${rem("1400px")};

  /* opacity: 0.75; */

  z-index: 1;

  ${mq.lessThan("bottomDesk")`
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

  ${mq.between("topDesk", "topUltra")`
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

export default Splash
