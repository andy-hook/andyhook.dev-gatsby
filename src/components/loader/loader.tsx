import React, { useEffect } from "react"
import styled from "styled-components"
import { TimelineMax, TweenLite, Expo } from "gsap"

interface Props {
  visible?: boolean
}

type ref = React.MutableRefObject<HTMLImageElement>

const Loader: React.FunctionComponent<Props> = ({ visible }) => {
  const containerRef: ref = React.useRef() as ref
  const timeline = new TimelineMax({ paused: true })

  const hide = () => {
    console.log("hide")
    TweenLite.to(containerRef.current, 1, {
      ease: Expo.easeOut,
      transform: "translate3d(0,-100%,0)",
    })
  }

  useEffect(() => {
    // timeline.add(TweenLite.to(containerRef.current, 1, { opacity: 0 })).play()
  })

  if (!visible) {
    hide()
  }

  return <Container ref={containerRef} />
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
