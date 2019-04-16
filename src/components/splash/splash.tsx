import React from "react"
import styled from "styled-components"
import mq from "../../style/mq"

import { SocialItem } from "../../types"

import Social from "../social/social"

interface Props {
  socialIconData: SocialItem[]
}

const Container = styled.div`
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
  font-size: 80px;
  letter-spacing: -0.02em;
`

const TitleSubtle = styled.span``

const TitleLoud = styled.span`
  color: #fff;
`

const Splash: React.FunctionComponent<Props> = ({ socialIconData }) => {
  return (
    <Container>
      <ContainerInner>
        <Title>
          <TitleSubtle>I build</TitleSubtle> <TitleLoud>interfaces</TitleLoud>
        </Title>
        <Social items={socialIconData} />
      </ContainerInner>
    </Container>
  )
}

export default Splash
