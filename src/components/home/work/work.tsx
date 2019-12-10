import React, { memo } from "react"
import { ProjectItem, Projects } from "@custom-types/model"
import { keys } from "@custom-types/utils"
import Card from "./card/card"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"
import * as S from "./work.style"

interface Props {
  projectsData: Projects
}

const Work: React.FunctionComponent<Props> = memo(({ projectsData }) => {
  const renderArray: ProjectItem[] = []

  keys(projectsData).map(item => {
    renderArray.push(projectsData[item])
  })

  const renderItems = renderArray.map((item, key) => (
    <Card label={item.label} desc={item.desc} path={item.path} key={key} />
  ))

  return (
    <S.Container>
      <Gutter>
        <Limiter size="large">{renderItems}</Limiter>
      </Gutter>
    </S.Container>
  )
})

export default Work
