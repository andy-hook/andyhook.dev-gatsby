import React, { memo, useState, useEffect, MutableRefObject } from "react"
import { sidebarWidth } from "@components/shared/menu/menu.style"
import { useMediaQueryContext } from "@components/shared/media-query-provider/media-query-provider"
import useDeferredRunEffect from "@hooks/deferred-run"
import { TweenMax, Expo } from "gsap"
import { useInView } from "react-intersection-observer"
import * as S from "./sidebar-slide.style"

interface Props {
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
    const animationRef = React.useRef() as MutableRefObject<HTMLDivElement>
    const [openPosition, setOpenPosition] = useState(open)
    const [openOnInitialRender, setOpenOnInitialRender] = useState(open)
    const [inviewRef, inView, entry] = useInView()
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
        setOpenPosition(true)
      }
    }

    const applyClosedStyleClass = () => {
      if (!cancelInternalStateUpdate) {
        setOpenPosition(false)
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
          onComplete: applyOpenStyleClass,
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
          onComplete: applyClosedStyleClass,
        }
      )
    }

    const animateToggle = (sidebarIsOpen?: boolean) => {
      sidebarIsOpen ? animateOpen() : animateClose()
    }

    const staticToggle = (sidebarIsOpen?: boolean) => {
      sidebarIsOpen ? applyOpenStyleClass() : applyClosedStyleClass()
    }

    const viewCheckToggle = (sidebarIsOpen?: boolean) => {
      // For performance we animate only if in view, otherwise set the position immediatley using a css class
      if (inView) {
        animateToggle(sidebarIsOpen)
      } else {
        staticToggle(sidebarIsOpen)
      }
    }

    // Prevent the GSAP onComplete callbacks setting useState after the component as unmounted
    // https://github.com/facebook/react/issues/14369#issuecomment-468267798
    useEffect(() => {
      return () => {
        cancelInternalStateUpdate = true
      }
    }, [open])

    useDeferredRunEffect(() => {
      viewCheckToggle(open)
    }, [open])

    // Ensure inView is correctly evaluated on component mount
    // https://github.com/thebuilder/react-intersection-observer/issues/284
    useEffect(() => {
      setOpenOnInitialRender(open)
    }, [])

    useEffect(() => {
      if (entry && openOnInitialRender) {
        // viewCheckToggle(open)
        staticToggle(open)
        setOpenOnInitialRender(false)
      }
    }, [entry])

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
