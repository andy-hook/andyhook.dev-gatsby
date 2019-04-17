import React from "react"
import styled from "styled-components"
import { fluidRange } from "polished"

import { SocialItem } from "../../types"

import Social from "../social/social"
import date from "../../images/svg/date.svg"
import { breakpoints } from "../../style/mq"

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

const Title = styled.h1`
  font-family: montserrat;
  font-weight: 600;
  text-align: center;
  color: #313134;
  letter-spacing: -0.02em;

  z-index: 1;

  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "40px",
      toSize: "80px",
    },
    breakpoints.bottomThumb,
    breakpoints.topUltra
  )}
`

const TitleSubtle = styled.span``

const TitleLoud = styled.span`
  color: #fff;
`

const StyledSocial = styled(Social)`
  position: absolute;
  width: 100%;
  left: 0;

  bottom: 15vh;

  z-index: 1;

  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "20px",
      toSize: "30px",
    },
    breakpoints.bottomThumb,
    breakpoints.topUltra
  )}
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

  opacity: 0.2;

  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "500px",
      toSize: "1000px",
    },
    breakpoints.bottomThumb,
    breakpoints.topUltra
  )};
`

const Splash: React.FunctionComponent<Props> = ({ socialIconData }) => {
  return (
    <Container>
      <Title>
        <TitleSubtle>I build</TitleSubtle> <TitleLoud>interfaces</TitleLoud>
      </Title>

      <StyledSocial items={socialIconData} />
      <Background>
        <StyledSVG />
      </Background>
    </Container>
  )
}

export default Splash
