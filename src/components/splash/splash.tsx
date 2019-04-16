import React from "react"
import styled from "styled-components"

import { SocialItem } from "../../types"

import Social from "../social/social"

interface Props {
  socialIconData: SocialItem[]
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
`

const Splash: React.FunctionComponent<Props> = ({ socialIconData }) => {
  return (
    <Container>
      <Social items={socialIconData} />
    </Container>
  )
}

export default Splash
