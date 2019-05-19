import React from "react"
import { IProjectItem } from "@custom-types/model"
import Limiter from "@components/shared/limiter/limiter"
import Gutter from "@components/shared/gutter/gutter"

interface Props {
  project: IProjectItem
}

const NextProject: React.FunctionComponent<Props> = ({ project }) => {
  return (
    <Gutter>
      <Limiter>{project.label}</Limiter>
    </Gutter>
  )
}

export default NextProject
