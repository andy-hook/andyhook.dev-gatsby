import React from "react"
import styled from "styled-components"
import { rem, between, rgba } from "polished"

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
  buttonHref: string
}

const Splash: React.FunctionComponent<Props> = ({
  socialIconData,
  buttonHref,
}) => {
  return (
    <Container>
      <ContainerInner>
        <Title>I’m busy working on something new</Title>
        <CallToAction href={buttonHref} target="_blank">
          View some of my work
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
  margin-bottom: 0.75em;

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
  text-shadow: 0 0 0.03em rgba(0, 0, 0, 0.5);

  padding: 1em 1.95em;
  background: linear-gradient(160deg, #b960eb 0%, #6b21cc 100%);

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

  z-index: 0;
`

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;

  background: linear-gradient(160deg, ${rgba("#050506", 0)} 30%, #050506 120%);
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
