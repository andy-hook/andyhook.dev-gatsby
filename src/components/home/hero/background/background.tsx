import React, { useEffect } from "react"
import styled from "styled-components"
import { between, rem, rgba } from "polished"
import { uniformScale, mq } from "../../../../style/utils"
import heroBg from "../../../../images/hero-bg.svg"
import date from "../../../../images/svg-import/date.svg"
import { emBreakpoints } from "../../../../style/variables"
import { TweenMax, Elastic } from "gsap"

interface Props {
  visible?: boolean
}

type divRef = React.MutableRefObject<HTMLDivElement>

const Background: React.FunctionComponent<Props> = ({ visible = true }) => {
  const dateRef: divRef = React.useRef() as divRef
  const containerRef: divRef = React.useRef() as divRef

  useEffect(() => {
    TweenMax.to(containerRef.current, 0.9, {
      opacity: 1,
    })

    if (visible) {
      TweenMax.fromTo(
        dateRef.current,
        0.8,
        {
          scale: 1.1,
        },
        {
          ease: Elastic.easeOut.config(0.8, 1),
          scale: 1,
          opacity: 1,
          clearProps: "transform",
        }
      )
    }
  })

  return (
    <Container ref={containerRef}>
      <BackgroundGradient />
      <Date ref={dateRef}>
        <DateGraphic />
      </Date>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: url(${heroBg}) repeat top left;

  overflow: hidden;

  z-index: 0;

  opacity: 0;

  ${mq.greaterThan("topWall")`
    background-size: 35%;
  `}
`

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 2;

  background: linear-gradient(175deg, ${rgba("#050506", 0)} 30%, #050506 80%);
`

const Date = styled.div`
position: relative;
  width: 1em;
  height: 0.35em;

  font-size: ${rem("1400px")};

  z-index: 1;

  opacity: 0;

  ${mq.lessThan("topDesk")`
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate3d(-45vw, -50%, 0);
  `}

  ${mq.between("topThumb", "bottomDesk")`
    font-size: ${between(
      rem("1400px"),
      rem("1050px"),
      emBreakpoints.topThumb,
      emBreakpoints.bottomDesk
    )};
  `}

  ${mq.between("topDesk", "bottomUltra")`
    font-size: ${between(
      rem("1050px"),
      rem("1250px"),
      emBreakpoints.topDesk,
      emBreakpoints.topUltra
    )};
  `}

  ${mq.greaterThan("topUltra")`
    font-size: ${uniformScale(rem("1250px"), "topUltra")};
  `}
`

const DateGraphic = styled(date)`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`

export default Background
