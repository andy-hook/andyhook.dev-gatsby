import React, { useEffect } from "react"
import styled from "styled-components"
import { between } from "polished"
import { uniformScale, mq } from "../../style/utils"
import {
  emBreakpoints,
  typeScale,
  fontFamily,
  fontWeight,
  borderRadius,
  letterSpacing,
  duration,
} from "../../style/variables"
import { Expo, TimelineLite } from "gsap"

interface Props {
  buttonHref: string
  visible?: boolean
}

type ref = React.MutableRefObject<HTMLImageElement>

const Details: React.FunctionComponent<Props> = ({ buttonHref, visible }) => {
  const containerRef: ref = React.useRef() as ref
  const containerTL = new TimelineLite()

  useEffect(() => {
    if (visible) {
      containerTL.to(containerRef.current, 0.5, {
        ease: Expo.easeOut,
        transform: "translate3d(0,0,0)",
        opacity: 1,
      })
    }
  })

  return (
    <Container ref={containerRef}>
      <Title>I’m busy working on something new</Title>
      <CallToAction href={buttonHref} target="_blank">
        <CallToActionInner>View some of my work</CallToActionInner>
      </CallToAction>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  flex-direction: column;

  margin-bottom: -3vh;

  z-index: 1;

  transform: translate3d(0, 100%, 0);
  opacity: 0;
`

const Title = styled.h2`
  font-family: ${fontFamily.display};
  font-weight: 600;
  text-align: center;
  color: #e3e3eb;
  padding-left: 0.75em;
  padding-right: 0.75em;
  letter-spacing: ${letterSpacing.display};
  max-width: 13em;
  text-shadow: 0px 0px 2em #08080a;

  margin-top: 0;
  margin-bottom: 0.7em;

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

  ${mq.between("topDesk", "bottomUltra")`
    font-size: ${between(
      typeScale[11],
      typeScale[12],
      emBreakpoints.bottomDesk,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(typeScale[12], "topUltra")};
  `}
`

const CallToAction = styled.a`
  position: relative;

  overflow: hidden;
  font-family: ${fontFamily.base};

  color: #fff;

  font-weight: ${fontWeight.base.bold};

  font-size: ${typeScale[2]};

  border-radius: ${borderRadius.pill};

  text-decoration: none;
  text-shadow: 0 0 0.03em rgba(0, 0, 0, 0.5);

  padding: 1em 1.95em;
  background: linear-gradient(160deg, #d450ff 0%, #6609e1 100%);

  &::before,
  &::after {
    transition: opacity ${duration.fast} linear;
    content: "";

    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    opacity: 0;

    border-radius: ${borderRadius.pill};
  }

  &::before {
    box-shadow: inset 0 -0.25em 1em 0 #c615a8;
    z-index: 2;
  }

  &::after {
    background: linear-gradient(160deg, #c615a8 0%, #4d0fbe 100%);
    z-index: 1;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 0.1;
    }

    &::after {
      /* mix-blend-mode: multiply; */
      opacity: 0.75;
    }
  }

  ${mq.between("bottomThumb", "bottomUltra")`
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

const CallToActionInner = styled.span`
  position: relative;
  z-index: 2;
`

export default Details
