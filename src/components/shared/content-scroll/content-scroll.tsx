import React, { memo } from "react"
import styled from "styled-components"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"

interface Props {
  transitionState: ItransitionState
  children?: any
}

const ContentScroll: React.FunctionComponent<Props> = memo(({ children }) => {
  // useEffect(() => {
  //   const { transitionStatus } = transitionState

  //   console.log(transitionStatus)
  // }, [transitionState.transitionStatus])

  return (
    <ScrollContainer>
      <OverflowTrim>{children}</OverflowTrim>
    </ScrollContainer>
  )
})

const ScrollContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  -webkit-overflow-scrolling: touch;
`

const OverflowTrim = styled.div`
  position: relative;
  overflow: hidden;
`

export default ContentScroll
