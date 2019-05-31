import React from "react"
import { IProjectItem } from "@custom-types/model"
import { TBreakpointName } from "@custom-types/breakpoints"
import Limiter from "@components/shared/limiter/limiter"
import Gutter from "@components/shared/gutter/gutter"
import styled from "styled-components"
import {
  typeTitle,
  typeSupTitle,
  typeSubTitle,
  typeSizeBaseSm,
  typeSizeDisplayLg,
} from "@style/typography"
import { themeTone } from "@style/theme"
import { scaleBetween, scaleGreaterThan, mq } from "@style/utils"

interface Props {
  project: IProjectItem
}

const Header: React.FunctionComponent<Props> = ({ project }) => {
  const Details = (
    <DetailsList>
      <DetailsItem>
        <DetailsTitle>Role</DetailsTitle>
        <DetailsContent>{project.details.role}</DetailsContent>
      </DetailsItem>
      <DetailsItem>
        <DetailsTitle>Location</DetailsTitle>
        <DetailsContent>{project.details.location}</DetailsContent>
      </DetailsItem>
      <DetailsItem>
        <DetailsTitle>Date</DetailsTitle>
        <DetailsContent>{project.details.date}</DetailsContent>
      </DetailsItem>
    </DetailsList>
  )

  return (
    <Container>
      <Gutter>
        <Limiter>
          <ProjectLabel>{project.label}</ProjectLabel>
          <ProjectDesc>{project.desc}</ProjectDesc>
        </Limiter>
      </Gutter>

      <Border>
        <Gutter>
          <Limiter>{Details}</Limiter>
        </Gutter>
      </Border>
    </Container>
  )
}

const layoutShift: TBreakpointName = "topLap"

const Border = styled.div`
  border-top: 1px solid ${themeTone(400)};
`

const DetailsList = styled.ul`
  ${typeSizeBaseSm}

  padding-top: 2.1em;
  padding-bottom: 2.1em;

  ${mq.greaterThan(layoutShift)`
    display: flex;
  `}
`

const DetailsItem = styled.li`
  display: flex;

  ${mq.lessThan(layoutShift)`
    &:not(:last-child) {
      margin-bottom: 0.35em;
    }
  `}

  ${mq.greaterThan(layoutShift)`
    &:not(:last-child) {
      margin-right: 3em;
    }
  `}
`

const DetailsTitle = styled.h3`
  ${typeSubTitle}

  margin-right: 0.75em;
`

const DetailsContent = styled.h3`
  ${typeSupTitle}
`

const Container = styled.header`
  padding-top: 13rem;

  ${scaleBetween("padding-top", "13rem", "20rem", "bottomThumb", "bottomUltra")}

  ${scaleGreaterThan("padding-top", "20rem", "topUltra")}
`

const ProjectLabel = styled.h1`
  ${typeSizeBaseSm}
  ${typeSupTitle}
`

const ProjectDesc = styled.h2`
  ${typeSizeDisplayLg}
  ${typeTitle}

  max-width: 16em;

  margin-top: 0.7em;
  margin-bottom: 1.5em;
`

export default Header
