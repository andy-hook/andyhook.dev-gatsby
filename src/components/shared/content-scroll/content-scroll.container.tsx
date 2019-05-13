import React, { memo } from "react"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import ContentScroll from "./content-scroll"

interface Props {
  children: any
}

const ContentScrollContainer: React.FunctionComponent<Props> = memo(
  ({ children }) => {
    return (
      <ContentScroll transitionState={useTransitionState()}>
        {children}
      </ContentScroll>
    )
  }
)

export default ContentScrollContainer
