import { IProjects, IProjectItem } from "@custom-types/model"

export const getCurrentProjectData = (
  dataObject: IProjects,
  projectKey: string
): IProjectItem => dataObject[projectKey]

export const getNextProjectData = (
  dataObject: IProjects,
  projectKey: string
): IProjectItem => {
  const keys = Object.keys(dataObject)
  const length = keys.length - 1
  const pos = keys.indexOf(projectKey)
  const nextPos = pos === length ? 0 : pos + 1

  return dataObject[keys[nextPos]]
}
