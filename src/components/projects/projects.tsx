import React, { memo, useEffect } from "react"
import { runAnimation } from "./projects.animation"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import styled from "styled-components"
import { Ref } from "@custom-types/ref"
import OverlineTitle from "@components/shared/overline-title/overline-title"
import CommonPage from "@components/shared/common-page/common-page"

const Projects: React.FunctionComponent = memo(() => {
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
    <CommonPage>
      <OverlineTitle overline="Overline text">Title text</OverlineTitle>
      <TestDiv ref={testDiv} />
    </CommonPage>
  )
})

const TestDiv = styled.div`
  background-color: red;

  opacity: 0;

  width: 300px;
  height: 300px;
`

export default Projects
