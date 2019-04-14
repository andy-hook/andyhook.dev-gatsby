import React from "react"
import styled from "styled-components"

interface Props {
  items?: object[]
}

const StyleTest = styled.div`
  font-family: montserrat, sans-serif;

  font-weight: 600;
  font-style: normal;
  padding: 100px;
  background-color: red;
`

const Social: React.FunctionComponent<Props> = () => {
  return <StyleTest />
}

export default Social
