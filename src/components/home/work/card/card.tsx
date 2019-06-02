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
      entry={{
        delay: 0,
        length: 0.5,
        state: {
          animType: "enter-from-home",
        },
      }}
      // The exit animation to play on this hero element
      exit={{
        // Length value should equal total running time of entire page leave animation
        length: 1,
        state: {
          animType: "exit-to-project",
        },
      }}
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
