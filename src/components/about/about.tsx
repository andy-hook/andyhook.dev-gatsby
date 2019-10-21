import React, { memo, useEffect } from "react"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import styled from "styled-components"
import { Ref } from "@custom-types/ref"
import CommonPage from "@components/shared/common-page/common-page"
import OverlineTitle from "@components/shared/overline-title/overline-title"
import { TweenMax, Elastic } from "gsap"

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
      0.25,
      {
        y: "0%",
      },
      {
        y: "-50%",
        opacity: 0,
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
      <TestDiv ref={testDiv} />
    </CommonPage>
  )
})

const TestDiv = styled.div`
  background-color: yellow;

  opacity: 0;

  width: 300px;
  height: 300px;
`

export default About
