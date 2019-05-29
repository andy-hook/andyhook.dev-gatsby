import React from "react"
import { IProjectItem, IProjectDetails } from "@custom-types/model"
import { keys } from "@custom-types/utils"
import Limiter from "@components/shared/limiter/limiter"
import Gutter from "@components/shared/gutter/gutter"
import styled from "styled-components"
import { typeTitle, typeBaseMedium, typeSupTitle } from "@style/typography"
import { themeText } from "@style/theme"
import { scaleBetween, scaleGreaterThan } from "@style/utils"
import { typeScale } from "@style/variables"

interface Props {
  project: IProjectItem
}

const Header: React.FunctionComponent<Props> = ({ project }) => {
  const Details = (
    <DetailsList>
      <li>
        <DetailsTitle>Role</DetailsTitle>
        <DetailsContent>{project.details.role}</DetailsContent>
      </li>
      <li>
        <DetailsTitle>Location</DetailsTitle>
        <DetailsContent>{project.details.location}</DetailsContent>
      </li>
      <li>
        <DetailsTitle>Date</DetailsTitle>
        <DetailsContent>{project.details.date}</DetailsContent>
      </li>
    </DetailsList>
  )

  return (
    <Container>
      <Gutter>
        <Limiter>
          <ProjectLabel>{project.label}</ProjectLabel>
          <ProjectDesc>{project.desc}</ProjectDesc>
          {Details}
        </Limiter>
      </Gutter>
    </Container>
  )
}

const DetailsList = styled.ul``

const DetailsTitle = styled.h3`
  ${typeTitle}
`

const DetailsContent = styled.h3`
  ${typeSupTitle}
`

const Container = styled.header`
  padding-top: 13rem;
  padding-bottom: 6rem;

  ${scaleBetween("padding-top", "13rem", "25rem", "bottomThumb", "bottomUltra")}

  ${scaleGreaterThan("padding-top", "25rem", "topUltra")}
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
