import React, { memo } from "react"
import classNames from "classnames"
import { Ref } from "@custom-types/ref"
import { TweenMax, Expo } from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"
import * as S from "./navicon.style"

export interface Props {
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
      <S.NaviconContainer
        className={classNames("", className)}
        onClick={onClick}
        open={open}
      >
        <S.BarsSVG viewBox="0 0 25 25">
          <rect x="1" y="8" width="23" height="2" ref={topBar} />
          <rect x="1" y="15" width="23" height="2" ref={bottomBar} />
        </S.BarsSVG>
      </S.NaviconContainer>
    )
  }
)

export default Navicon
