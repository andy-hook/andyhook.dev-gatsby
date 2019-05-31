import React from "react"
import Limiter from "@components/shared/limiter/limiter"
import Gutter from "@components/shared/gutter/gutter"
import { TProjectContents } from "@custom-types/model"
import { themeText } from "@style/theme"
import styled from "styled-components"

interface Props {
  sections: TProjectContents
}

const Contents: React.FunctionComponent<Props> = ({ sections }) => {
  const contentsList = sections.map(item => (
    <ContentsItem key={item.key}>{item.label}</ContentsItem>
  ))

  return (
    <Gutter>
      <Limiter>
        <div>
          <ul>{contentsList}</ul>
        </div>
        <div>hello world</div>
      </Limiter>
    </Gutter>
  )
}

const ContentsItem = styled.li`
  color: ${themeText(100)};
  background-color: red;
`

export default Contents
