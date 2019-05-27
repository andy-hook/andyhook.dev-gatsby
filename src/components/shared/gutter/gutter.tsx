import React, { memo, ReactNode } from "react"
import styled from "styled-components"
import { mq } from "@style/utils"

interface Props {
  children: ReactNode
}

const Gutter: React.FunctionComponent<Props> = memo(({ children }) => {
  return <GutterContainer>{children}</GutterContainer>
})

const GutterContainer = styled.div`
  padding-left: 8%;
  padding-right: 8%;

  ${mq.greaterThan("topPalm")`
    padding-left: 5%;
    padding-right: 5%;
  `}

  width: 100%;
`

export default Gutter
