import React, { memo, MutableRefObject } from "react"
import CommonPage from "@components/shared/common-page/common-page"
import OverlineTitle from "@components/shared/overline-title/overline-title"
import gsap from "gsap"
import * as S from "./about.styles"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"
import { PAGE_TRANSITION_DURATION } from "@constants"
import usePageTransition from "@hooks/page-transition"

const About: React.FunctionComponent = memo(() => {
  const testDiv = React.useRef() as MutableRefObject<HTMLDivElement>

  const animatePop = () => {
    gsap.fromTo(
      testDiv.current,
      0.75,
      {
        scale: 1.5,
      },
      {
        ease: "elastic.out(0.8, 1)",
        scale: 1,
        opacity: 1,
      }
    )
  }

  const animateEnter = () => {
    gsap.fromTo(
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
    gsap.fromTo(
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

  const { inviewRef } = usePageTransition({
    runInview: {
      onEnter: animateEnter,
      onExit: animateExit,
      onPop: animatePop,
      onEnterFromMenu: animateEnter,
    },
  })

  return (
    <CommonPage>
      <Gutter ref={inviewRef}>
        <Limiter>
          <OverlineTitle overline="Overline text">Title text</OverlineTitle>
          <S.TestDiv ref={testDiv} />
        </Limiter>
      </Gutter>
    </CommonPage>
  )
})

export default About
