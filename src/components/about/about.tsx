import React, { memo, useEffect } from "react"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import { Ref } from "@custom-types/ref"
import CommonPage from "@components/shared/common-page/common-page"
import OverlineTitle from "@components/shared/overline-title/overline-title"
import { TweenMax, Elastic } from "gsap"
import * as S from "./about.styles"
import SidebarSlide from "@components/shared/sidebar-slide/sidebar-slide.container"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"
import {
  PAGE_TRANSITION_DURATION,
  TRANSITION_STATUS_POP,
  TRANSITION_STATUS_ENTERING,
  TRANSITION_STATUS_EXITING,
  TRANSITION_TYPE_ENTER,
  TRANSITION_TYPE_EXIT,
} from "@constants"

const About: React.FunctionComponent = memo(() => {
  const testDiv = React.useRef() as Ref
  const transitionState = useTransitionState()

  const animatePop = () => {
    TweenMax.fromTo(
      testDiv.current,
      0.75,
      {
        scale: 1.5,
      },
      {
        ease: Elastic.easeOut.config(0.8, 1),
        scale: 1,
        opacity: 1,
      }
    )
  }

  const animateEnter = () => {
    TweenMax.fromTo(
      testDiv.current,
      0.25,
      {
        y: "50%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
      }
    )
  }

  const animateExit = () => {
    TweenMax.fromTo(
      testDiv.current,
      PAGE_TRANSITION_DURATION,
      {
        y: "0%",
      },
      {
        y: "-50%",
        opacity: 0,
        onComplete: () => {
          window.scrollTo(0, 0)
        },
      }
    )
  }

  useEffect(() => {
    const { transitionStatus, exit, entry } = transitionState

    switch (transitionStatus) {
      case TRANSITION_STATUS_POP:
        animatePop()
        break
      case TRANSITION_STATUS_ENTERING:
        switch (entry.state.animType) {
          case TRANSITION_TYPE_ENTER:
            animateEnter()

            break

          // This clause works around bug with pushstate and history navigation
          // Hopefully this can be resolved and pop will run consistently
          // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
          default:
            animatePop()
        }
        break
      case TRANSITION_STATUS_EXITING:
        switch (exit.state.animType) {
          case TRANSITION_TYPE_EXIT:
            animateExit()

            break
        }
        break
    }
  }, [transitionState.transitionStatus])

  return (
    <CommonPage>
      <SidebarSlide>
        <Gutter>
          <Limiter>
            <OverlineTitle overline="Overline text">Title text</OverlineTitle>
            <S.TestDiv ref={testDiv} />
          </Limiter>
        </Gutter>
      </SidebarSlide>
    </CommonPage>
  )
})

export default About
