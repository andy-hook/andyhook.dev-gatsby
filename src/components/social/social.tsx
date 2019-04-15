import React from "react"
import styled from "styled-components"

interface Props {
  items: [
    {
      node: {
        label: string
        url: string
      }
    }
  ]
}

const StyleTest = styled.div`
  font-family: montserrat, sans-serif;

  font-weight: 600;
  font-style: normal;
  padding: 100px;
  background-color: red;
`

const Social: React.FunctionComponent<Props> = ({ items }) => {
  console.log(items)
  const icons = items.map((item, key) => (
    <li>
      {item.node.label} {item.node.url}
    </li>
  ))

  return (
    <>
      {icons}
      <StyleTest />
    </>
  )
}

export default Social
