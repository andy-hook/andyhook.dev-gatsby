import React, { memo, ReactNode } from "react"
import styled from "styled-components"

interface Props {
  children: ReactNode
}

const Gutter: React.FunctionComponent<Props> = memo(({ children }) => {
  return <GutterContainer>{children}</GutterContainer>
})

const GutterContainer = styled.div`
  padding-left: 50px;
  padding-right: 50px;
`

export default Gutter
