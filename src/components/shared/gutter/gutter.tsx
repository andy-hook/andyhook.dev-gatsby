import React, { memo, ReactNode } from "react"
import styled from "styled-components"
import { mq } from "@style/media-queries"

interface Props {
  children: ReactNode
}

const Gutter: React.FunctionComponent<Props> = memo(({ children }) => {
  return <GutterContainer>{children}</GutterContainer>
})

const GutterContainer = styled.div`
  ${mq.lessThan("topUltra")`
    padding-left: 10%;
    padding-right: 10%;
  `}

  width: 100%;
`

export default Gutter
