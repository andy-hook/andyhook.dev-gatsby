import React from "react"
import styled from "styled-components"
import { between } from "polished"
import { SocialItem } from "../../types/model"
import Social from "../social/social"
import Logo from "./logo"
import Details from "./details"
import Background from "./background"
import { uniformScale, mq } from "../../style/utils"
import { emBreakpoints, typeScale } from "../../style/variables"

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
      <Logo />
      <Details buttonHref={buttonHref} />
      <SocialIcons items={socialIconData} />
      <Background />
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

const SocialIcons = styled(Social)`
  position: absolute;
  width: 100%;
  left: 0;

  bottom: 9vh;

  z-index: 1;

  font-size: ${typeScale[6]};

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

export default Splash
