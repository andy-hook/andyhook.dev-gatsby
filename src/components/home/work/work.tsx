import React, { memo } from "react"
import { ContainerProps } from "./work.container"
import { IProjectItem } from "@custom-types/model"
import Card from "./card/card"
import styled from "styled-components"

type AllProps = ContainerProps

const Hero: React.FunctionComponent<AllProps> = memo(({ projectsData }) => {
  const renderArray: IProjectItem[] = []

  Object.keys(projectsData).map(item => {
    renderArray.push(projectsData[item])
  })

  const renderItems = renderArray.map((item, key) => (
    <CardPositioner key={key}>
      <Card label={item.label} desc={item.desc} path={item.path} />
    </CardPositioner>
  ))

  return <>{renderItems}</>
})

const CardPositioner = styled.div`
  padding: 50px;
`

export default Hero
