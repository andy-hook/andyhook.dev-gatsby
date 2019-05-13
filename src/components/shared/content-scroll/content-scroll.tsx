import React, { memo, ReactNode } from "react"
import styled from "styled-components"
import { ItransitionState } from "@custom-types/gatsby-plugin-transition-link"

interface Props {
  transitionState: ItransitionState
  children?: ReactNode
}

const ContentScroll: React.FunctionComponent<Props> = memo(({ children }) => {
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
