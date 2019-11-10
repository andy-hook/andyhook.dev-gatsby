import React, { memo } from "react"
import { IProjectItem, TProjects } from "@custom-types/model"
import { keys } from "@custom-types/utils"
import Card from "./card/card"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"
import { themeTone } from "@style/theme"
import styled from "styled-components"
import SidebarSlide from "@components/shared/sidebar-slide/sidebar-slide.container"

interface Props {
  projectsData: TProjects
}

const Work: React.FunctionComponent<Props> = memo(({ projectsData }) => {
  const renderArray: IProjectItem[] = []

  keys(projectsData).map(item => {
    renderArray.push(projectsData[item])
  })

  const renderItems = renderArray.map((item, key) => (
    <Card label={item.label} desc={item.desc} path={item.path} key={key} />
  ))

  return (
    <Container>
      <SidebarSlide>
        <Gutter>
          <Limiter size="large">{renderItems}</Limiter>
        </Gutter>
      </SidebarSlide>
    </Container>
  )
})

const Container = styled.div`
  background-color: ${themeTone(100)};
`

export default Work
