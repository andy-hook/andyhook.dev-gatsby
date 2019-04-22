import React from "react"
import styled from "styled-components"
import { fluidRange, rem, between } from "polished"

import { SocialItem } from "../../types"

import Social from "../social/social"
import date from "../../images/svg/date.svg"
import { uniformScale, mq, emBreakpoints, styleVars } from "../../style/utils"

interface Props {
  socialIconData: SocialItem[]
}

const Splash: React.FunctionComponent<Props> = ({ socialIconData }) => {
  return (
    <Container>
      <ContainerInner>
        <Title>I’m busy working on something new</Title>
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
  position: relative;

  z-index: 1;
`

const Title = styled.h1`
  font-family: montserrat, sans-serif;
  font-weight: 600;
  text-align: center;
  color: #e3e3eb;
  padding-left: 0.75em;
  padding-right: 0.75em;
  letter-spacing: -0.02em;
  max-width: 13em;
  text-shadow: 0px 0px 2em #08080a;

  margin: 0;

  z-index: 1;

  font-size: ${styleVars.type[9]};

  ${mq.between("bottomThumb", "topUltra")`
    font-size: ${between(
      styleVars.type[9],
      styleVars.type[12],
      emBreakpoints.bottomThumb,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale("75px", "topUltra")};
  `}
`

const SocialIcons = styled(Social)`
  position: absolute;
  width: 100%;
  left: 0;

  bottom: 14vh;

  z-index: 1;

  font-size: ${styleVars.type[7]};

  ${mq.between("bottomThumb", "topUltra")`
    font-size: ${between(
      styleVars.type[7],
      styleVars.type[9],
      emBreakpoints.bottomThumb,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(styleVars.type[9], "topUltra")};
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

  font-size: ${rem("300px")};
  min-width: ${rem("300px")};

  opacity: 0.7;

  ${fluidRange(
    {
      prop: "font-size",
      fromSize: rem("500px"),
      toSize: rem("1200px"),
    },
    emBreakpoints.bottomThumb,
    emBreakpoints.topUltra
  )}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(rem("1200px"), "topUltra")};
  `}
`

export default Splash
