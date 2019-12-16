import React, { memo } from "react"
import { Projects } from "@custom-types/model"
import { keys } from "@utils"
import Card from "./card/card"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"
import * as S from "./work.style"

interface Props {
  projects: Projects
}

const Work: React.FunctionComponent<Props> = memo(({ projects }) => {
  const renderItems = keys(projects).map((key, index) => {
    const item = projects[key]

    return (
      <Card label={item.label} desc={item.desc} path={item.path} key={index} />
    )
  })

  return (
    <S.Container>
      <Gutter>
        <Limiter size="large">{renderItems}</Limiter>
      </Gutter>
    </S.Container>
  )
})

export default Work
