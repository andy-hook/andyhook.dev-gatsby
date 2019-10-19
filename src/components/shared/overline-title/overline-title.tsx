import React, { memo, ReactNode } from "react"
import styled from "styled-components"
import { typeSupTitle, typeTitle } from "@style/typography"

interface Props {
  overline: string
  children: ReactNode
}

const OverlineTitle: React.FunctionComponent<Props> = memo(
  ({ overline, children }) => (
    <div>
      <Overline>{{ overline }}</Overline>
      <Title>{{ children }}</Title>
    </div>
  )
)

const Overline = styled.h2`
  ${typeSupTitle}
`

const Title = styled.h3`
  ${typeTitle}
`

export default OverlineTitle
