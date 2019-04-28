import React, { useEffect } from "react"
import styled from "styled-components"
import { between, rem, rgba } from "polished"
import { uniformScale, mq } from "../../style/utils"
import heroBg from "../../images/hero-bg.svg"
import date from "../../images/svg-import/date.svg"
import { emBreakpoints } from "../../style/variables"
import { Expo, TimelineMax } from "gsap"

interface Props {
  visible?: boolean
}

type ref = React.MutableRefObject<HTMLImageElement>

const Background: React.FunctionComponent<Props> = ({ visible = true }) => {
  const dateRef: ref = React.useRef() as ref
  const dateTL = new TimelineMax()

  useEffect(() => {
    if (visible) {
      dateTL.to(dateRef.current, 3, {
        ease: Expo.easeOut,
        opacity: 1,
      })
    }
  })

  return (
    <Container>
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

  background: linear-gradient(175deg, ${rgba("#050506", 0)} 30%, #020203 80%);
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
