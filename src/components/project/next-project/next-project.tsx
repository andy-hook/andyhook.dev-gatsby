import React from "react"
import { IProjectItem } from "@custom-types/model"

interface Props {
  project: IProjectItem
}

const NextProject: React.FunctionComponent<Props> = ({ project }) => {
  return <div>{project.label}</div>
}

export default NextProject
