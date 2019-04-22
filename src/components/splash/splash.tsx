import React from "react"
import styled from "styled-components"
import { fluidRange, rem, between } from "polished"

import { SocialItem } from "../../types"

import Social from "../social/social"
import date from "../../images/svg/date.svg"
import { uniformScale, mq } from "../../style/utils"
import {
  emBreakpoints,
  typeScale,
  fontFamily,
  fontWeight,
  borderRadius,
} from "../../style/variables"

interface Props {
  socialIconData: SocialItem[]
}

const Splash: React.FunctionComponent<Props> = ({ socialIconData }) => {
  return (
    <Container>
      <ContainerInner>
        <Title>I’m busy working on something new</Title>
        <CallToAction href="https://dribbble.com/andyhook" target="_blank">
          View some of my work
        </CallToAction>
      </ContainerInner>

      <SocialIcons items={socialIconData} />
      <Background>
        <DateGraphic />
      </Background>
    </Container>
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

const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  flex-direction: column;

  z-index: 1;
`

const Title = styled.h1`
  font-family: ${fontFamily.display};
  font-weight: 600;
  text-align: center;
  color: #e3e3eb;
  padding-left: 0.75em;
  padding-right: 0.75em;
  letter-spacing: -0.02em;
  max-width: 13em;
  text-shadow: 0px 0px 2em #08080a;

  margin-top: 0;
  margin-bottom: 0.65em;

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

  ${mq.between("bottomDesk", "topUltra")`
    font-size: ${between(
      typeScale[11],
      typeScale[12],
      emBreakpoints.bottomDesk,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale("75px", "topUltra")};
  `}
`

const CallToAction = styled.a`
  font-family: ${fontFamily.base};

  color: #e3e3eb;

  font-weight: ${fontWeight.base.bold};

  font-size: ${typeScale[2]};

  border-radius: ${borderRadius.pill};

  text-decoration: none;

  padding: 0.9em 1.8em;
  background-color: grey;

  ${mq.greaterThan("bottomPalm")`
    padding: 0.95em 1.9em;
  `}

  ${mq.between("bottomThumb", "topUltra")`
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

const SocialIcons = styled(Social)`
  position: absolute;
  width: 100%;
  left: 0;

  bottom: 14vh;

  z-index: 1;

  font-size: ${typeScale[7]};

  ${mq.between("bottomThumb", "topUltra")`
    font-size: ${between(
      typeScale[7],
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

  z-index: 0;
`

const DateGraphic = styled(date)`
  width: 1em;
  height: 0.35em;

  font-size: ${rem("500px")};

  opacity: 0.7;

  ${mq.between("bottomThumb", "topUltra")`
    font-size: ${between(
      rem("500px"),
      rem("1350px"),
      emBreakpoints.bottomThumb,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(rem("1350px"), "topUltra")};
  `}
`

export default Splash
