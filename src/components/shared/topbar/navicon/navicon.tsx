import React, { memo } from "react"
import styled, { css } from "styled-components"
import { borderRadius, zIndex } from "@style/variables"
import { themeTone, themeText } from "@style/theme"
import classNames from "classnames"
import { Ref } from "@custom-types/ref"
import { TweenMax, Expo } from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"

interface Props {
  open?: boolean
  className?: string
  onClick: () => void
}

const Navicon: React.FunctionComponent<Props> = memo(
  ({ onClick, open, className }) => {
    const topBar = React.useRef() as Ref
    const bottomBar = React.useRef() as Ref

    const animateOpen = () => {
      TweenMax.set(topBar.current, { transformOrigin: "center center" })
      TweenMax.set(bottomBar.current, { transformOrigin: "center center" })

      TweenMax.to(topBar.current, 1, {
        ease: Expo.easeOut,
        rotation: 45,
        y: 3.5,
      })

      TweenMax.to(bottomBar.current, 1, {
        ease: Expo.easeOut,
        rotation: -45,
        y: -3.5,
      })
    }

    const animateClose = () => {
      TweenMax.to(topBar.current, 1, {
        ease: Expo.easeOut,
        rotation: 0,
        y: 0,
      })

      TweenMax.to(bottomBar.current, 1, {
        ease: Expo.easeOut,
        rotation: 0,
        y: 0,
      })
    }

    useDeferredRunEffect(() => {
      open ? animateOpen() : animateClose()
    }, [open])

    return (
      <NaviconContainer
        className={classNames("", className)}
        onClick={onClick}
        open={open}
      >
        <BarsSVG viewBox="0 0 25 25">
          <rect x="1" y="8" width="23" height="2" ref={topBar} />
          <rect x="1" y="15" width="23" height="2" ref={bottomBar} />
        </BarsSVG>
      </NaviconContainer>
    )
  }
)

const openStyles = css`
  background-color: ${themeTone(600)};
`

const NaviconContainer = styled.button<Props>`
  position: relative;

  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 4.5em;

  width: 1em;
  height: 1em;

  &::after {
    content: "";

    opacity: 0;

    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    border-radius: ${borderRadius.circle};

    background-color: ${themeTone(400)};

    ${props => props.open && openStyles}

    z-index: ${zIndex.floor};
  }
`

const BarsSVG = styled.svg`
  display: block;

  font-size: 0.425em;

  height: 1em;
  width: 1em;

  margin-bottom: -0.05em;

  z-index: ${zIndex.low};

  & rect {
    /* transform-origin: center center; */
    fill: ${themeText(500)};
  }
`

export default Navicon
