import { Normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"
import React from "react"

const Global = createGlobalStyle`
  body {
    background-color: #0B0B0D;
  }
`

const GlobalStyle: React.FunctionComponent = () => {
  return (
    <>
      <Normalize />
      <Global />
    </>
  )
}

export default GlobalStyle
