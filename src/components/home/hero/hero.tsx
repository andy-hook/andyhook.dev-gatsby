import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { between } from "polished"
import Social from "./social/social"
import Logo from "@components/shared/logo/logo"
import { ContainerProps } from "./hero.container"
import Details from "./details/details"
import Background from "./background/background"
import { uniformScale, mq } from "@style/utils"
import { emBreakpoints, typeScale } from "@style/variables"
import animation from "./hero.animation"
import { Ref } from "@custom-types/ref"

interface Props {
  introTrigger?: boolean
  canPerformIntro?: boolean
}

type AllProps = Props & ContainerProps

const Hero: React.FunctionComponent<AllProps> = ({
  socialIconData,
  introTrigger = true,
}) => {
  const [elementsVisible, showElements] = useState(false)

  const detailsRef: Ref = React.useRef() as Ref
  const logoRef: Ref = React.useRef() as Ref
  const socialRef: Ref = React.useRef() as Ref

  const runEntranceAnimation = () => {
    animation.details.siteEntrance(detailsRef)
    animation.logo.siteEntrance(logoRef)
    animation.social.siteEntrance(socialRef)
  }

  useEffect(() => {
    if (introTrigger) {
      setTimeout(() => {
        runEntranceAnimation()
        showElements(true)
      }, 650)
    }
  }, [])

  return (
    <Container>
      <LogoPos ref={logoRef}>
        <Logo />
      </LogoPos>

      <DetailsPos ref={detailsRef}>
        <Details buttonHref={socialIconData.dribbble.url} />
      </DetailsPos>

      <SocialPos ref={socialRef}>
        <Social items={socialIconData} />
      </SocialPos>
      <Background visible={elementsVisible} />
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

const LogoPos = styled.div`
  display: flex;

  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;

  top: 9vh;

  z-index: 1;

  opacity: 0;
`

const DetailsPos = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  flex-direction: column;

  margin-bottom: -3vh;

  z-index: 1;

  opacity: 0;

  will-change: transform;
`

const SocialPos = styled.div`
  position: absolute;
  width: 100%;
  left: 0;

  bottom: 9vh;

  z-index: 1;

  font-size: ${typeScale[6]};

  opacity: 0;

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

export default Hero
