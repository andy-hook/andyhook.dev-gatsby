import React from "react"
import styled from "styled-components"
import { fluidRange } from "polished"

import { SocialItem } from "../../types"

import Social from "../social/social"
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

const ContainerInner = styled.div``

const Title = styled.h1`
  font-family: montserrat;
  font-weight: 600;
  text-align: center;
  color: #313134;
  letter-spacing: -0.02em;

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

const Splash: React.FunctionComponent<Props> = ({ socialIconData }) => {
  return (
    <Container>
      <ContainerInner>
        <Title>
          <TitleSubtle>I build</TitleSubtle> <TitleLoud>interfaces</TitleLoud>
        </Title>
      </ContainerInner>
      <StyledSocial items={socialIconData} />
    </Container>
  )
}

export default Splash
