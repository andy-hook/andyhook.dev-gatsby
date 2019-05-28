import React from "react"
import { IProjectItem } from "@custom-types/model"
import Limiter from "@components/shared/limiter/limiter"
import Gutter from "@components/shared/gutter/gutter"
import styled from "styled-components"
import { typeTitle, typeBaseMedium } from "@style/typography"
import { themeText } from "@style/theme"

interface Props {
  project: IProjectItem
}

const Header: React.FunctionComponent<Props> = ({ project }) => {
  return (
    <HeaderContainer>
      <Gutter>
        <Limiter>
          <ProjectLabel>{project.label}</ProjectLabel>
          <ProjectDesc>{project.desc}</ProjectDesc>
        </Limiter>
      </Gutter>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  padding-top: 20rem;
`

const ProjectLabel = styled.h1`
  ${typeBaseMedium}

  color: ${themeText(1000)};

  font-size: 20px;
`

const ProjectDesc = styled.h2`
  ${typeTitle}

  font-size: 50px;
`

export default Header
