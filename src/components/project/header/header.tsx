import React from "react"
import { IProjectItem } from "@custom-types/model"
import Limiter from "@components/shared/limiter/limiter"
import Gutter from "@components/shared/gutter/gutter"
import styled from "styled-components"

interface Props {
  project: IProjectItem
}

const Header: React.FunctionComponent<Props> = ({ project }) => {
  return (
    <HeaderContainer>
      <Gutter>
        <Limiter>{project.label}</Limiter>
      </Gutter>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  background-color: blue;
  height: 400px;
`

export default Header
