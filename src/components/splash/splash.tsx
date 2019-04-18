import React from "react"
import styled from "styled-components"
import { fluidRange } from "polished"

import { SocialItem } from "../../types"

import Social from "../social/social"
import date from "../../images/svg/date.svg"
import { breakpoints, mq } from "../../style/mq"
import { uniformScale } from "../../style/utils"

interface Props {
  socialIconData: SocialItem[]
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
  color: #313134;
  letter-spacing: -0.02em;

  margin: 0;

  z-index: 1;

  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "40px",
      toSize: "75px",
    },
    breakpoints.bottomThumb,
    breakpoints.topUltra
  )}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale("75px", "topUltra")};
  `}
`

const TitleSubtle = styled.span``

const TitleLoud = styled.span`
  color: #fff;
`

const StyledSocial = styled(Social)`
  position: absolute;
  width: 100%;
  left: 0;

  bottom: 14vh;

  z-index: 1;

  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "20px",
      toSize: "28px",
    },
    breakpoints.bottomThumb,
    breakpoints.topUltra
  )}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale("25px", "topUltra")};
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

const StyledSVG = styled(date)`
  width: 1em;
  height: 0.35em;

  font-size: 300px;
  min-width: 300px;

  opacity: 0.7;

  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "500px",
      toSize: "1050px",
    },
    breakpoints.bottomThumb,
    breakpoints.topUltra
  )}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale("1050px", "topUltra")};
  `}
`

const Para = styled.p`
  position: absolute;
  font-family: proxima-nova, sans-serif;
  font-weight: 500;
  text-align: center;
  color: #343438;
  letter-spacing: 0.005em;
  margin: 0;

  width: 100%;

  bottom: -2.25em;

  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "14px",
      toSize: "18px",
    },
    breakpoints.bottomThumb,
    breakpoints.topUltra
  )}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale("20px", "topUltra")};
  `}
`

const Splash: React.FunctionComponent<Props> = ({ socialIconData }) => {
  return (
    <Container>
      <ContainerInner>
        <Title>
          <TitleSubtle>I build</TitleSubtle> <TitleLoud>interfaces</TitleLoud>
        </Title>
        <Para>I’m working on something new, i’ll be right back.</Para>
      </ContainerInner>

      <StyledSocial items={socialIconData} />
      <Background>
        <StyledSVG />
      </Background>
    </Container>
  )
}

export default Splash
