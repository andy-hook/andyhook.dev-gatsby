import React, { memo, ReactNode, useState, useEffect } from "react"
import { sidebarWidth } from "@components/shared/menu/menu.style"
import { useMediaQueryContext } from "@components/shared/media-query-provider/media-query-provider"
import useDeferredRunEffect from "@hooks/deferred-run"
import { TweenMax, Expo } from "gsap"
import { Ref } from "@custom-types/ref"
import { useInView } from "react-intersection-observer"
import * as S from "./sidebar-slide.style"

interface Props {
  children: ReactNode
  open?: boolean
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
    const [openPosition, setOpenPosition] = useState(open)
    const [inviewRef, inView] = useInView()
    let cancelInternalStateUpdate = false

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
        return `-${sidebarWidth.thumb}%`
      }

      return `-${sidebarWidth.initial}%`
    }

    const applyOpenStyleClass = () => {
      if (!cancelInternalStateUpdate) {
        setOpenPosition(false)
      }
    }

    const applyClosedStyleClass = () => {
      if (!cancelInternalStateUpdate) {
        setOpenPosition(true)
      }
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
          onComplete: applyClosedStyleClass,
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
          onComplete: applyOpenStyleClass,
        }
      )
    }

    // Prevent the GSAP onComplete callbacks setting useState after the component as unmounted
    // https://github.com/facebook/react/issues/14369#issuecomment-468267798
    useEffect(() => {
      return () => {
        cancelInternalStateUpdate = true
      }
    }, [open])

    useDeferredRunEffect(() => {
      // For performance we animate only if in view, otherwise set the position immediatley using a css class
      if (inView) {
        open ? animateOpen() : animateClose()
      } else {
        open ? applyClosedStyleClass() : applyOpenStyleClass()
      }
    }, [open])

    return (
      <div ref={inviewRef}>
        <S.SlideAnimation
          ref={animationRef}
          className={openPosition ? "is-open" : "is-closed"}
        >
          {children}
        </S.SlideAnimation>
      </div>
    )
  }
)

export default SidebarSlide
