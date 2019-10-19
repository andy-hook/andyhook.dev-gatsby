import React, { memo, useEffect } from "react"
import { runAnimation } from "./about.animation"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import styled from "styled-components"
import { Ref } from "@custom-types/ref"

const AboutComponent: React.FunctionComponent = memo(() => {
  const testDiv = React.useRef() as Ref
  const transitionState = useTransitionState()

  const refs = {
    test: testDiv,
  }

  useEffect(() => {
    const { transitionStatus, exit, entry } = transitionState

    switch (transitionStatus) {
      case "POP":
        runAnimation(refs, "pop")
        break
      case "entering":
        switch (entry.state.animType) {
          case "enter":
            runAnimation(refs, "enter")

            break

          // This clause works around bug with pushstate and history navigation
          // Hopefully this can be resolved and pop will run consistently
          // TODO – https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/94
          default:
            runAnimation(refs, "pop")
        }
        break
      case "exiting":
        switch (exit.state.animType) {
          case "exit":
            runAnimation(refs, "exit")

            break
        }
        break
    }
  }, [transitionState.transitionStatus])

  return (
    <AboutWrapper>
      <TestDiv ref={testDiv} />
    </AboutWrapper>
  )
})

const TestDiv = styled.div`
  background-color: yellow;

  opacity: 0;

  width: 300px;
  height: 300px;
`

const AboutWrapper = styled.div`
  background-color: blue;

  height: 2000px;
`

export default AboutComponent
