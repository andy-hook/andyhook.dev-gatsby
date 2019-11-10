import React, { memo, useEffect } from "react"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import { Ref } from "@custom-types/ref"
import OverlineTitle from "@components/shared/overline-title/overline-title"
import CommonPage from "@components/shared/common-page/common-page"
import { TweenMax, Elastic } from "gsap"
import * as S from "./projects.style"

const Projects: React.FunctionComponent = memo(() => {
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
      0.25,
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
      case "POP":
        animatePop()
        break
      case "entering":
        switch (entry.state.animType) {
          case "enter":
            animateEnter()

            break

          // This clause works around bug with pushstate and history navigation
          // Hopefully this can be resolved and pop will run consistently
          // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
          default:
            animatePop()
        }
        break
      case "exiting":
        switch (exit.state.animType) {
          case "exit":
            animateExit()

            break
        }
        break
    }
  }, [transitionState.transitionStatus])

  return (
    <CommonPage>
      <OverlineTitle overline="Overline text">Title text</OverlineTitle>
      <S.TestDiv ref={testDiv} />
    </CommonPage>
  )
})

export default Projects
