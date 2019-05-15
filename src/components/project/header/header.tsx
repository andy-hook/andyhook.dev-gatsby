import React from "react"
import { IProjectItem } from "@custom-types/model"

interface Props {
  project: IProjectItem
}

const Header: React.FunctionComponent<Props> = ({ project }) => {
  return <header>{project.label}</header>
}

export default Header
