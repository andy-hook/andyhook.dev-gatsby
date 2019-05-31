import { TProjects, IProjectItem, TProjectNames } from "@custom-types/model"
import { keys } from "@custom-types/utils"

export const getCurrentProjectData = (
  dataObject: TProjects,
  projectKey: TProjectNames
): IProjectItem => dataObject[projectKey]

export const getNextProjectData = (
  dataObject: TProjects,
  projectKey: TProjectNames
): IProjectItem => {
  const projectKeysArray = keys(dataObject)
  const length = projectKeysArray.length - 1
  const pos = projectKeysArray.indexOf(projectKey)
  const nextPos = pos === length ? 0 : pos + 1

  return dataObject[projectKeysArray[nextPos]]
}
