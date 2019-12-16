import { getCurrentProjectData, getNextProjectData } from "./utils"
import { mockProjectsData } from "@data/mocks"
import { keys } from "@utils"

const projectKeys = keys(mockProjectsData)

describe("getCurrentProjectData", () => {
  test("Should return specified project", () => {
    const projectKey = "experiments"

    const out = getCurrentProjectData(mockProjectsData, projectKey)

    expect(out).toMatchObject(mockProjectsData[projectKey])
  })
})

describe("getNextProjectData", () => {
  test("Should return the next project", () => {
    const projectKey = "brandwatch"

    const nextPos = projectKeys.indexOf(projectKey) + 1

    const out = getNextProjectData(mockProjectsData, projectKey)

    expect(out).toMatchObject(mockProjectsData[projectKeys[nextPos]])
  })

  test("Should return the first project when the end of the list is reached", () => {
    const firstProject = mockProjectsData[projectKeys[0]]

    const projectKey = "experiments"

    const out = getNextProjectData(mockProjectsData, projectKey)

    expect(out).toMatchObject(firstProject)
  })
})
