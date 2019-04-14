import React from "react"
import styled from "styled-components"

const StyleTest = styled.div`
  font-family: montserrat, sans-serif;

  font-weight: 600;
  font-style: normal;
  padding: 50px;
  background-color: orange;
`

const MyComponent = () => <StyleTest>Hello world</StyleTest>

export default MyComponent
