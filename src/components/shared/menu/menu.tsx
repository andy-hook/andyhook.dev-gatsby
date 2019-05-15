import React, { memo, useEffect } from "react"
import styled from "styled-components"
import { Ref } from "@custom-types/ref"
import { TweenMax, Expo } from "gsap"

interface Props {
  open?: boolean
}

const Menu: React.FunctionComponent<Props> = memo(({ open }) => {
  const containerRef = React.useRef() as Ref

  const animateOpen = () => {
    TweenMax.to(containerRef.current, 0.5, {
      ease: Expo.easeOut,
      y: "0%",
    })
  }

  const animateClose = () => {
    TweenMax.to(containerRef.current, 0.5, {
      ease: Expo.easeOut,
      y: "-100%",
      clearProps: "transform",
    })
  }

  const triggerAnimation = () => {
    return open ? animateOpen() : animateClose()
  }

  useEffect(() => {
    triggerAnimation()
  })

  return <MenuContainer open={open} ref={containerRef} />
})

const MenuContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: white;
  transform: translate3d(0, -100%, 0);
`

export default Menu
