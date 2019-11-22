import { Projects, ProjectItem, ProjectNames } from "@custom-types/model"
import { keys } from "@custom-types/utils"

export const getCurrentProjectData = (
  dataObject: Projects,
  projectKey: ProjectNames
): ProjectItem => dataObject[projectKey]

export const getNextProjectData = (
  dataObject: Projects,
  projectKey: ProjectNames
): ProjectItem => {
  const projectKeysArray = keys(dataObject)
  const length = projectKeysArray.length - 1
  const pos = projectKeysArray.indexOf(projectKey)
  const nextPos = pos === length ? 0 : pos + 1

  return dataObject[projectKeysArray[nextPos]]
}
