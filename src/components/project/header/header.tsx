import React from "react"
import { IProjectItem } from "@custom-types/model"
import { TBreakpointName } from "@custom-types/breakpoints"
import Limiter from "@components/shared/limiter/limiter"
import Gutter from "@components/shared/gutter/gutter"
import styled from "styled-components"
import { typeTitle, typeSupTitle, typeSubTitle } from "@style/typography"
import { themeTone } from "@style/theme"
import { scaleBetween, scaleGreaterThan, mq } from "@style/utils"
import { typeScale } from "@style/variables"

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
  padding-top: 2.1em;
  padding-bottom: 2.1em;

  font-size: ${typeScale[4]};

  ${mq.greaterThan(layoutShift)`
    display: flex;
  `}
  
  ${scaleBetween(
    "font-size",
    typeScale[4],
    typeScale[5],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[5],
    typeScale[6],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[6], "topUltra")}
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
  ${typeSupTitle}

  margin-bottom: 1.4em;

  font-size: ${typeScale[4]};
  
  ${scaleBetween(
    "font-size",
    typeScale[4],
    typeScale[5],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[5],
    typeScale[6],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[6], "topUltra")}
`

const ProjectDesc = styled.h2`
  ${typeTitle}

  max-width: 16em;

  margin-bottom: 1.5em;

  font-size: ${typeScale[8]};
  
  ${scaleBetween(
    "font-size",
    typeScale[8],
    typeScale[10],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[10],
    typeScale[11],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[11], "topUltra")}
`

export default Header
