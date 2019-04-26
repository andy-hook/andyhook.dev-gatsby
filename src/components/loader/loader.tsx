import React, { useEffect } from "react"
import styled from "styled-components"
import { TimelineMax, TweenLite } from "gsap"

interface Props {
  visible?: boolean
}

const Loader: React.FunctionComponent<Props> = () => {
  const test = React.useRef() as React.MutableRefObject<HTMLImageElement>
  const timeline = new TimelineMax({ paused: true })

  useEffect(() => {
    timeline.add(TweenLite.to(test.current, 1, { opacity: 0 })).play()
  })

  return <Container ref={test} />
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: white;

  z-index: 10;
`

export default Loader
