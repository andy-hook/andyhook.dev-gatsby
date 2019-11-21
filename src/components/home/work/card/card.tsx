import React, { memo } from "react"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"

interface Props {
  label: string
  desc: string
  path: string
}

const Card: React.FunctionComponent<Props> = memo(({ label, desc, path }) => {
  return (
    <CardElement
      to={path} // Entry animation to play on the project page
    >
      {label}
      {desc}
    </CardElement>
  )
})

const CardElement = styled(Link)`
  display: block;
  padding: 50px;
  background-color: red;
`

export default Card
