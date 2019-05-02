import React, { useEffect } from "react"
import styled from "styled-components"
import { rem, between } from "polished"
import { Expo, TimelineMax, Elastic } from "gsap"
import { uniformScale, mq } from "@style/utils"
import { emBreakpoints } from "@style/variables"

interface Props {
  visible?: boolean
  onLeaveComplete?: () => void
  onEnterComplete?: () => void
}

type divRef = React.MutableRefObject<HTMLDivElement>
type pathRef = React.MutableRefObject<SVGPathElement>

const Loader: React.FunctionComponent<Props> = ({
  visible,
  onLeaveComplete,
  onEnterComplete,
}) => {
  const containerRef: divRef = React.useRef() as divRef
  const markRef: divRef = React.useRef() as divRef
  const boltRef: pathRef = React.useRef() as pathRef
  const markTL = new TimelineMax()
  const boltTL = new TimelineMax()

  const markOut = () => {
    markTL.to(markRef.current, 0.7, {
      ease: Elastic.easeIn.config(1, 0.7),
      transform: "scale(0.1)",
      opacity: 0,
      onComplete: onLeaveComplete,
    })
  }

  const markIn = () => {
    markTL.fromTo(
      markRef.current,
      0.7,
      {
        scale: 0.1,
        rotation: -40,
      },
      {
        ease: Elastic.easeOut.config(1, 0.6),
        scale: 1,
        rotation: 0,
        opacity: 1,
        onComplete: onEnterComplete,
      }
    )
  }

  const boltIn = () => {
    boltTL.fromTo(
      boltRef.current,
      0.5,
      {
        opacity: 0,
        rotation: -30,
        scale: 0.1,
        transformOrigin: "bottom right",
      },
      {
        ease: Expo.easeOut,
        delay: 0.05,
        rotation: 0,
        scale: 1,
        opacity: 1,
      }
    )
  }

  const animateIn = () => {
    boltIn()
    markIn()
  }

  const animateOut = () => {
    markOut()
  }

  const triggerMark = () => {
    return visible ? animateIn() : animateOut()
  }

  useEffect(() => {
    triggerMark()
  })

  return (
    <Container ref={containerRef}>
      <Mark ref={markRef}>
        <MarkSVG viewBox="0 0 85 85">
          <defs>
            <linearGradient
              id="markGradient"
              x1="-35.42%"
              x2="86.43%"
              y1="20.18%"
              y2="73.79%"
            >
              <stop offset="0%" stopColor="#B55DE9" />
              <stop offset="100%" stopColor="#6B21CC" />
            </linearGradient>
          </defs>
          <path
            fill="url(#markGradient)"
            d="M17.52 11h50.26c3.6 0 6.52 2.92 6.52 6.52v50.26c0 3.6-2.92 6.52-6.52 6.52H17.52A6.52 6.52 0 0 1 11 67.78V17.52c0-3.6 2.92-6.52 6.52-6.52z"
            transform="rotate(45 42.65 42.65)"
          />
          <BoltPath
            ref={boltRef}
            d="M45.1 39.96l5.04-13.04c.25-.69-.8-1.13-1.39-.58L30.42 44.75c-.48.48-.05 1.12.67 1.04l6.82-.71-5.04 13.08c-.25.68.8 1.13 1.4.57l18.33-18.4c.47-.48.04-1.16-.68-1.08l-6.81.71z"
          />
        </MarkSVG>
      </Mark>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 10;
`

const Mark = styled.div`
  width: 1em;
  height: 1em;

  opacity: 0;

  font-size: ${rem("75px")};

  ${mq.between("bottomThumb", "bottomUltra")`
    font-size: ${between(
      rem("75px"),
      rem("100px"),
      emBreakpoints.bottomThumb,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(rem("100px"), "topUltra")};
  `}
`

const MarkSVG = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
`

const BoltPath = styled.path`
  fill: white;
`

export default Loader
