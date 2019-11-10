import React, { memo, ReactNode, useState } from "react"
import styled, { css } from "styled-components"
import { mq } from "@style/media-queries"
import { sidebarWidth } from "@components/shared/menu/menu"
import { useMediaQueryContext } from "@components/shared/media-query-provider/media-query-provider"
import useDeferredRunEffect from "@hooks/deferred-run"
import { TweenMax, Expo } from "gsap"
import { Ref } from "@custom-types/ref"
import { useInView } from "react-intersection-observer"

interface Props {
  children: ReactNode
  open?: boolean
}

interface StyleProps {
  slide?: boolean
}

const SidebarSlide: React.FunctionComponent<Props> = memo(
  ({ children, open }) => {
    const {
      topThumb,
      topPalm,
      topLap,
      topDesk,
      topWide,
      topWall,
    } = useMediaQueryContext()
    const animationRef = React.useRef() as Ref
    const [openPosition, setOpenPosition] = useState(false)
    const [inviewRef, inView] = useInView()

    const movementAmount = () => {
      if (topWall) {
        return `${sidebarWidth.wall}%`
      }

      if (topWide) {
        return `${sidebarWidth.wide}%`
      }

      if (topDesk) {
        return `${sidebarWidth.desk}%`
      }

      if (topLap) {
        return `${sidebarWidth.lap}%`
      }

      if (topPalm) {
        return `${sidebarWidth.palm}%`
      }

      if (topThumb) {
        return `${sidebarWidth.thumb}%`
      }

      return `${sidebarWidth.initial}%`
    }

    const animateOpen = () => {
      // Backboard
      TweenMax.fromTo(
        animationRef.current,
        0.75,
        {
          x: "0%",
        },
        {
          ease: Expo.easeOut,
          x: movementAmount(),
          clearProps: "transform",
          onComplete: () => {
            setOpenPosition(true)
          },
        }
      )
    }

    const animateClose = () => {
      // Backboard
      TweenMax.fromTo(
        animationRef.current,
        0.75,
        {
          x: movementAmount(),
        },
        {
          ease: Expo.easeOut,
          x: "0%",
          clearProps: "transform",
          onComplete: () => {
            setOpenPosition(false)
          },
        }
      )
    }

    useDeferredRunEffect(() => {
      if (inView) {
        open ? animateOpen() : animateClose()
      } else {
        open ? setOpenPosition(true) : setOpenPosition(false)
      }
    }, [open])

    return (
      <div ref={inviewRef}>
        <SlideAnimation
          ref={animationRef}
          className={openPosition ? "is-open" : "is-closed"}
        >
          {children}
        </SlideAnimation>
      </div>
    )
  }
)

const applyTransform = (size: any) => {
  return css`
    transform: translate3d(${size}%, 0, 0);
  `
}

const SlideAnimation = styled.div<StyleProps>`
  &.is-open {
    ${applyTransform(sidebarWidth.initial)}

    ${mq.greaterThan("topThumb")`
      ${applyTransform(sidebarWidth.thumb)}
    `}

    ${mq.greaterThan("topPalm")`
      ${applyTransform(sidebarWidth.palm)}
    `}

    ${mq.greaterThan("topLap")`
      ${applyTransform(sidebarWidth.lap)}
    `}

    ${mq.greaterThan("topDesk")`
      ${applyTransform(sidebarWidth.desk)}
    `}

    ${mq.greaterThan("topWide")`
      ${applyTransform(sidebarWidth.wide)}
    `}

    ${mq.greaterThan("topWall")`
      ${applyTransform(sidebarWidth.wall)}
    `}
  }
`

export default SidebarSlide
