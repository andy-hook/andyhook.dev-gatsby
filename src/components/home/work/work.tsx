import React, { memo } from "react"
import { ContainerProps } from "./work.container"
import { IProjectItem } from "@custom-types/model"
import { keys } from "@custom-types/utils"
import Card from "./card/card"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"

type AllProps = ContainerProps

const Work: React.FunctionComponent<AllProps> = memo(({ projectsData }) => {
  const renderArray: IProjectItem[] = []

  keys(projectsData).map(item => {
    renderArray.push(projectsData[item])
  })

  const renderItems = renderArray.map((item, key) => (
    <Card label={item.label} desc={item.desc} path={item.path} key={key} />
  ))

  return (
    <>
      <Gutter>
        <Limiter size="large">{renderItems}</Limiter>
      </Gutter>
    </>
  )
})

export default Work
