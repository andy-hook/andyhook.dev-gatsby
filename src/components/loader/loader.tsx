import React, { useEffect } from "react"
import styled from "styled-components"
import { Expo, TimelineLite } from "gsap"

interface Props {
  visible?: boolean
  onComplete?: () => void | false
}

type ref = React.MutableRefObject<HTMLImageElement>

const Loader: React.FunctionComponent<Props> = ({ visible, onComplete }) => {
  const containerRef: ref = React.useRef() as ref
  const markRef: ref = React.useRef() as ref
  const markTL = new TimelineLite()

  const markOut = () => {
    markTL.to(markRef.current, 0.5, {
      ease: Expo.easeOut,
      transform: "translate3d(0,-100%,0)",
      opacity: 0,
      onComplete,
    })
  }

  const markIn = () => {
    markTL.to(markRef.current, 0.5, {
      ease: Expo.easeOut,
      transform: "translate3d(0,0,0)",
      opacity: 1,
    })
  }

  const triggerMark = () => {
    return visible ? markIn() : markOut()
  }

  useEffect(() => {
    triggerMark()
  })

  return (
    <Container ref={containerRef}>
      <Mark ref={markRef} />
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
  width: 100px;
  height: 100px;

  background-color: white;

  transform: translate3d(0, 100%, 0);
  opacity: 0;
`

export default Loader
